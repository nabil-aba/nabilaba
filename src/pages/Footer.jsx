import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

import { useLang } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <Box
      bg="blackAlpha.800"
      py={10}
      mt={10}
      borderTop="1px solid"
      borderColor="whiteAlpha.200"
      id="contact"
    >
      <Container maxW="container.md" textAlign="center">
        <Heading size="lg" mb={6}>
          {t.footer.heading}
        </Heading>
        <Text color="gray.300" mb={8}>
          {t.footer.sub}
        </Text>
        <Flex justify="center" gap={6} mb={8}>
          <Link
            href="mailto:nabilazizbimaanggita@gmail.com"
            aria-label="Email Contact"
          >
            <Icon
              as={FaEnvelope}
              boxSize={8}
              aria-hidden="true"
              _hover={{ color: "cyan.400" }}
              transition="color 0.2s"
            />
          </Link>
          <Link
            href="https://github.com/nabilaba"
            isExternal
            aria-label="GitHub Profile"
          >
            <Icon
              as={FaGithub}
              boxSize={8}
              aria-hidden="true"
              _hover={{ color: "purple.400" }}
              transition="color 0.2s"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nabilaba/"
            isExternal
            aria-label="LinkedIn Profile"
          >
            <Icon
              as={SiLinkedin}
              boxSize={8}
              aria-hidden="true"
              _hover={{ color: "blue.400" }}
              transition="color 0.2s"
            />
          </Link>
        </Flex>
        <Text fontSize="sm" color="gray.400">
          &copy; {new Date().getFullYear()} Nabil Aziz Bima Anggita (Nabil Aba).{" "}
          <br />
          {t.footer.copyright}
        </Text>
      </Container>
    </Box>
  );
}
