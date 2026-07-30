import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaBook, FaExternalLinkAlt } from "react-icons/fa";

import { useLang } from "../context/LanguageContext";

const MotionBox = motion.create(Box);

export default function Publications() {
  const { t } = useLang();

  return (
    <Container maxW="container.lg" py={20} id="publications">
      <Heading
        textAlign="center"
        size="2xl"
        mb={12}
        bgGradient="linear(to-r, cyan.400, pink.400)"
        bgClip="text"
      >
        {t.publications.title}
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {t.publications.items.map((paper, index) => (
          <MotionBox
            key={index}
            p={6}
            bg="whiteAlpha.50"
            borderRadius="xl"
            border="1px solid"
            borderColor="whiteAlpha.100"
          >
            <Flex justify="space-between" align="start" mb={4}>
              <Icon
                as={FaBook}
                color="purple.400"
                boxSize={6}
                aria-hidden="true"
              />
              <Badge colorScheme="purple" variant="outline">
                {paper.year}
              </Badge>
            </Flex>
            <Heading size="md" mb={2} color="white">
              {paper.title}
            </Heading>
            <Text color="cyan.400" fontSize="sm" fontWeight="bold" mb={2}>
              {paper.journal}
            </Text>
            <Text color="gray.400" fontSize="sm" mb={4}>
              {paper.description}
            </Text>
            <Link
              href={paper.link}
              isExternal
              color="whiteAlpha.700"
              _hover={{ color: "cyan.300" }}
              display="flex"
              alignItems="center"
              gap={2}
              fontSize="sm"
            >
              {t.publications.readPaper}{" "}
              <Icon as={FaExternalLinkAlt} boxSize={3} aria-hidden="true" />
            </Link>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Container>
  );
}
