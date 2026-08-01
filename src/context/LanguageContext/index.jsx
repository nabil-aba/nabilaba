import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import locales, { DEFAULT_LANG } from "../../locales";

const STORAGE_KEY = "nabilaba_lang";
const LanguageContext = createContext();

function buildProxy(langData, fallbackData) {
  return new Proxy(
    {},
    {
      get(_, section) {
        const sectionData = langData?.[section];
        const fallbackSection = fallbackData?.[section];

        if (typeof sectionData === "object" && !Array.isArray(sectionData)) {
          return new Proxy(
            {},
            {
              get(__, key) {
                const val = sectionData?.[key];
                if (val !== undefined && val !== null && val !== "") return val;
                return fallbackSection?.[key];
              },
            },
          );
        }

        if (
          sectionData !== undefined &&
          sectionData !== null &&
          sectionData !== ""
        ) {
          return sectionData;
        }

        return fallbackSection;
      },
    },
  );
}

export function LanguageProvider({ children, serverLang }) {
  const navigate = useNavigate();
  const location = useLocation();

  const getInitialLang = () => {
    if (serverLang) return serverLang;
    if (typeof window !== "undefined") {
      return window.location.pathname.startsWith("/id") ? "id" : "en";
    }
    return DEFAULT_LANG;
  };

  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    const currentLang = location.pathname.startsWith("/id") ? "id" : "en";
    if (lang !== currentLang) {
      setLang(currentLang);
    }
  }, [location.pathname]);

  useEffect(() => {
    const savedLang = window.localStorage.getItem(STORAGE_KEY);
    const currentPath = location.pathname;

    if (savedLang === "id" && currentPath === "/") {
      navigate("/id", { replace: true });
    } else if (savedLang === "en" && currentPath.startsWith("/id")) {
      navigate("/", { replace: true });
    }
  }, []);

  const changeLang = (code) => {
    if (locales[code]) {
      window.localStorage.setItem(STORAGE_KEY, code);
      setLang(code);
      navigate(code === "id" ? "/id" : "/");
    }
  };

  const currentLocale = locales[lang] ?? locales[DEFAULT_LANG];
  const fallbackLocale = locales[DEFAULT_LANG];
  const t = buildProxy(currentLocale, fallbackLocale);

  return (
    <LanguageContext.Provider value={{ lang, changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
