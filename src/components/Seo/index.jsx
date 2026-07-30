import { Helmet } from "react-helmet-async";

import { useLang } from "../../context/LanguageContext";

export default function Seo({ title, description, image, url }) {
  const { t } = useLang();
  const defaultTitle = t.seo.title;
  const defaultDesc = t.seo.description;
  const defaultImage = "/assets/favicon.svg";

  return (
    <Helmet>
      <title>{title ? `${title} | Nabil Aba` : defaultTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta
        property="og:title"
        content={title ? `${title} | Nabil Aba` : defaultTitle}
      />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:image" content={image || defaultImage} />
      <meta
        property="og:url"
        content={
          url || (typeof window !== "undefined" ? window.location.href : "")
        }
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={title ? `${title} | Nabil Aba` : defaultTitle}
      />
      <meta name="twitter:description" content={description || defaultDesc} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
}
