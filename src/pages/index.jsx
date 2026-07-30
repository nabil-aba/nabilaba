import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
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

import Seo from "../components/Seo/index.jsx";
import { useLang } from "../context/LanguageContext";
import { LANGUAGES } from "../locales";
import AIPerspective from "./AIPerspective";
import About from "./About";
import BackgroundDecorations from "./BackgroundDecorations";
import Education from "./Education";
import Experiences from "./Experiences";
import Footer from "./Footer";
import Hero from "./Hero";
import IntellectualProperty from "./IntellectualProperty";
import Projects from "./Projects";
import Publications from "./Publications";
import Skills from "./Skills";

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
        rightIcon={<ChevronDownIcon aria-hidden="true" />}
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
            icon={<HamburgerIcon aria-hidden="true" />}
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

function App() {
  const { t } = useLang();
  const plainBio = t.hero.bio.replace(/<[^>]+>/g, "");

  return (
    <Box minH="100dvh">
      <Seo title="Portfolio" description={plainBio} />
      <BackgroundDecorations />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experiences />
        <Publications />
        <IntellectualProperty />
        <Skills />
        <Projects />
        <AIPerspective />
      </main>
      <Footer />
    </Box>
  );
}

export default App;
