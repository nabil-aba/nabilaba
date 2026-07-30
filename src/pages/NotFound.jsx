import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Seo from "../components/Seo/index.jsx";
import { useLang } from "../context/LanguageContext";
import BackgroundDecorations from "./BackgroundDecorations.jsx";

const MotionBox = motion.create(Box);

export default function NotFound() {
  const { t } = useLang();

  return (
    <Box minH="100dvh" position="relative" overflow="hidden" bg="#0a0a12">
      <Seo title={t.notFound.title} description={t.notFound.desc} />
      <BackgroundDecorations />
      <Flex
        h="100dvh"
        align="center"
        justify="center"
        direction="column"
        textAlign="center"
        position="relative"
        zIndex={1}
        px={4}
      >
        <MotionBox
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
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
            colorScheme="purple"
            borderRadius="full"
            px={8}
            border="2px solid black"
            boxShadow="4px 4px 0px black"
            _hover={{
              boxShadow: "6px 6px 0px black",
              transform: "translateY(-2px)",
            }}
            _active={{
              boxShadow: "2px 2px 0px black",
              transform: "translateY(2px)",
            }}
          >
            {t.notFound.btn}
          </Button>
        </MotionBox>
      </Flex>
    </Box>
  );
}
