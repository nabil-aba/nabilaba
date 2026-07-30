import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Tag,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaBrain, FaRobot, FaStackOverflow } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";

import { useLang } from "../context/LanguageContext";

const MotionBox = motion.create(Box);

export default function AIPerspective() {
  const { t } = useLang();
  const p1Parts = t.aiPerspective.p1.split("<cyan>");
  const p1Before = p1Parts[0];
  const p1Rest = p1Parts[1]?.split("</cyan>");
  const p1Highlight = p1Rest?.[0];
  const p1After = p1Rest?.[1];

  return (
    <Container maxW="container.lg" py={20}>
      <MotionBox
        p={10}
        bg="linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)"
        borderRadius="2xl"
        border="1px solid"
        borderColor="whiteAlpha.200"
        position="relative"
        overflow="hidden"
        whileHover={{ borderColor: "#00B5D8" }}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          opacity={0.05}
          backgroundImage="repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, #0f0f1a 25%, #0f0f1a 75%, #000 75%, #000)"
          backgroundPosition="0 0, 10px 10px"
          backgroundSize="20px 20px"
        />
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          gap={10}
          position="relative"
          zIndex={1}
        >
          <Box flex={1}>
            <Heading
              size="xl"
              mb={6}
              bgGradient="linear(to-r, cyan.400, white)"
              bgClip="text"
            >
              {t.aiPerspective.title}
            </Heading>
            <Text color="gray.300" fontSize="lg" mb={4} lineHeight="tall">
              {p1Before}
              <Text as="span" color="cyan.400" fontWeight="bold">
                {p1Highlight}
              </Text>
              {p1After}
            </Text>
            <Text color="gray.400" mb={6}>
              {t.aiPerspective.p2}
            </Text>
            <Wrap spacing={4}>
              <Tag size="lg" colorScheme="orange" borderRadius="full">
                <Icon as={FaStackOverflow} mr={2} aria-hidden="true" />{" "}
                {t.aiPerspective.tags.stackoverflow}
              </Tag>
              <Tag size="lg" colorScheme="green" borderRadius="full">
                <Icon as={SiGeeksforgeeks} mr={2} aria-hidden="true" />{" "}
                {t.aiPerspective.tags.geeksforgeeks}
              </Tag>
              <Tag size="lg" colorScheme="purple" borderRadius="full">
                <Icon as={FaBrain} mr={2} aria-hidden="true" />{" "}
                {t.aiPerspective.tags.criticalThinking}
              </Tag>
            </Wrap>
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <Icon
              as={FaRobot}
              w={40}
              h={40}
              color="whiteAlpha.100"
              aria-hidden="true"
            />
          </Box>
        </Flex>
      </MotionBox>
    </Container>
  );
}
