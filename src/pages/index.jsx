import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { Suspense, lazy, useEffect, useState } from "react";

import Seo from "../components/Seo/index.jsx";
import { useLang } from "../context/LanguageContext";
import { LANGUAGES } from "../locales";
import Hero from "./Hero";

const About = lazy(() => import("./About"));
const Education = lazy(() => import("./Education"));
const Experiences = lazy(() => import("./Experiences"));
const Publications = lazy(() => import("./Publications"));
const IntellectualProperty = lazy(() => import("./IntellectualProperty"));
const Skills = lazy(() => import("./Skills"));
const Projects = lazy(() => import("./Projects"));
const AIPerspective = lazy(() => import("./AIPerspective"));
const Footer = lazy(() => import("./Footer"));
const BackgroundDecorations = lazy(() => import("./BackgroundDecorations"));

const ChevronIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="1.2em"
    height="1.2em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
  </svg>
);

const MenuIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="1.5em"
    height="1.5em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

const LanguageSwitcher = () => {
  const { lang, changeLang } = useLang();
  const current = LANGUAGES.find((l) => l.code === lang);
  return (
    <Menu>
      <MenuButton
        as={Button}
        size="xs"
        variant="outline"
        colorScheme="cyan"
        borderRadius="full"
        px={3}
        fontWeight="bold"
        rightIcon={<ChevronIcon />}
        _hover={{ bg: "cyan.400", color: "black" }}
      >
        {current.flag} {current.label}
      </MenuButton>
      <MenuList
        bg="#0a0a12"
        border="1px solid"
        borderColor="whiteAlpha.300"
        minW="130px"
      >
        {LANGUAGES.map((l) => (
          <MenuItem
            key={l.code}
            onClick={() => changeLang(l.code)}
            bg="transparent"
            _hover={{ bg: "whiteAlpha.200" }}
            fontWeight={lang === l.code ? "bold" : "normal"}
            color={lang === l.code ? "cyan.400" : "white"}
          >
            {l.flag} {l.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useLang();
  const navLinks = [
    { label: t.navbar.about, anchor: "about" },
    { label: t.navbar.education, anchor: "education" },
    { label: t.navbar.experience, anchor: "experience" },
    { label: t.navbar.publications, anchor: "publications" },
    { label: t.navbar.ipr, anchor: "ipr" },
    { label: t.navbar.skills, anchor: "skills" },
    { label: t.navbar.projects, anchor: "projects" },
    { label: t.navbar.contact, anchor: "contact" },
  ];
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", window.location.pathname);
    }
  };
  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      zIndex="100"
      backdropFilter="blur(10px)"
      bg="rgba(10, 10, 18, 0.8)"
    >
      <Flex
        p={4}
        justify="space-between"
        align="center"
        maxW="container.xl"
        mx="auto"
      >
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.replaceState(null, "", window.location.pathname);
          }}
          bgGradient="linear(to-r, cyan.400, purple.500)"
          bgClip="text"
          fontWeight="extrabold"
        >
          NABIL ABA
        </Link>
        <HStack
          spacing={6}
          display={{ base: "none", md: "flex" }}
          fontSize="sm"
          fontWeight="bold"
        >
          {navLinks.map((item) => (
            <Link
              key={item.anchor}
              href={`#${item.anchor}`}
              onClick={(e) => handleScroll(e, item.anchor)}
              _hover={{ color: "cyan.400", textDecoration: "none" }}
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
          <LanguageSwitcher />
        </HStack>
        <HStack display={{ md: "none" }} spacing={2}>
          <LanguageSwitcher />
          <IconButton
            icon={<MenuIcon />}
            aria-label="Open Menu"
            onClick={onOpen}
            variant="ghost"
            color="white"
            _hover={{ bg: "whiteAlpha.300" }}
          />
        </HStack>
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#0a0a12" color="white">
          <DrawerCloseButton />
          <DrawerBody pt={12}>
            <VStack spacing={8} align="center">
              {navLinks.map((item) => (
                <Link
                  key={item.anchor}
                  href={`#${item.anchor}`}
                  onClick={(e) => {
                    handleScroll(e, item.anchor);
                    onClose();
                  }}
                  fontSize="xl"
                  fontWeight="bold"
                  _hover={{ color: "cyan.400", textDecoration: "none" }}
                >
                  {item.label.toUpperCase()}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default function Index() {
  const { t } = useLang();
  const plainBio = t.hero.bio.replace(/<[^>]+>/g, "");

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 300);

    const triggerLoad = () => setIsMounted(true);
    const events = ["scroll", "mousemove", "touchstart", "keydown"];

    events.forEach((event) =>
      window.addEventListener(event, triggerLoad, {
        once: true,
        passive: true,
      }),
    );

    return () => {
      clearTimeout(timer);
      events.forEach((event) => window.removeEventListener(event, triggerLoad));
    };
  }, []);

  return (
    <Box minH="100dvh" isolation="isolate">
      <Seo title="Portfolio" description={plainBio} />

      <Navbar />

      <main>
        <Hero />

        {isMounted && (
          <Suspense fallback={null}>
            <BackgroundDecorations />
          </Suspense>
        )}

        {isMounted && (
          <Suspense fallback={<Box minH="100vh" bg="#0a0a12" />}>
            <About />
            <Education />
            <Experiences />
            <Publications />
            <IntellectualProperty />
            <Skills />
            <Projects />
            <AIPerspective />
          </Suspense>
        )}
      </main>

      {isMounted && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}
    </Box>
  );
}
