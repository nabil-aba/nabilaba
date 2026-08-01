import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Seo from "../components/Seo/index.jsx";
import { useLang } from "../context/LanguageContext";
import BackgroundDecorations from "./BackgroundDecorations.jsx";

export default function NotFound() {
  const { t } = useLang();

  return (
    <Box minH="100dvh" position="relative" overflow="hidden" bg="#0a0a12">
      <Seo title={t.notFound.title} description={t.notFound.desc} />
      <BackgroundDecorations />
      <Flex
        as="main"
        h="100dvh"
        align="center"
        justify="center"
        direction="column"
        textAlign="center"
        position="relative"
        zIndex={1}
        px={4}
      >
        <Heading
          fontSize={{ base: "8xl", md: "9xl" }}
          bgGradient="linear(to-r, cyan.400, purple.500, pink.400)"
          bgClip="text"
          fontWeight="900"
          mb={2}
        >
          {t.notFound.heading}
        </Heading>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          color="gray.300"
          mb={8}
          fontWeight="bold"
          letterSpacing="widest"
        >
          {t.notFound.sub}
        </Text>
        <Button
          as={Link}
          to="/"
          size="lg"
          borderRadius="full"
          px={8}
          border="2px solid black"
          bg="purple.500"
          color="white"
          _hover={{ bg: "purple.600" }}
          _active={{ bg: "purple.700" }}
        >
          {t.notFound.btn}
        </Button>
      </Flex>
    </Box>
  );
}
