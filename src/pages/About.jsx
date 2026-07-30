import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaAndroid, FaCode, FaGraduationCap } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";

import { useLang } from "../context/LanguageContext";

const MotionBox = motion.create(Box);

export default function About() {
  const { t } = useLang();
  return (
    <Container maxW="container.lg" py={20} id="about">
      <Flex direction={{ base: "column", lg: "row" }} align="center" gap={10}>
        <Box flex={1}>
          <Heading
            size="2xl"
            mb={6}
            borderLeft="4px solid"
            borderColor="cyan.400"
            pl={4}
          >
            {t.about.title}
          </Heading>
          <Text
            fontSize="lg"
            color="gray.300"
            mb={4}
            dangerouslySetInnerHTML={{ __html: t.about.p1 }}
          />
          <Text
            fontSize="lg"
            color="gray.300"
            mb={4}
            dangerouslySetInnerHTML={{ __html: t.about.p2 }}
          />
          <Text fontSize="lg" color="gray.300">
            {t.about.p3}
          </Text>
        </Box>
        <MotionBox
          flex={1}
          bg="whiteAlpha.100"
          p={8}
          borderRadius="2xl"
          border="1px dashed"
          borderColor="whiteAlpha.300"
          w="full"
        >
          <VStack align="start" spacing={4}>
            <Heading size="md" color="purple.300">
              {t.about.stats}
            </Heading>
            <Flex align="center" gap={3}>
              <Icon
                as={FaGraduationCap}
                boxSize={6}
                color="yellow.400"
                aria-hidden="true"
              />
              <Text>{t.about.education}</Text>
            </Flex>
            <Flex align="center" gap={3}>
              <Icon
                as={FaCode}
                boxSize={6}
                color="cyan.400"
                aria-hidden="true"
              />
              <Text>
                <b>45+</b> {t.about.repos}
              </Text>
            </Flex>
            <Flex align="center" gap={3}>
              <Icon
                as={FaAndroid}
                boxSize={6}
                color="green.400"
                aria-hidden="true"
              />
              <Text>{t.about.androidWeb}</Text>
            </Flex>
            <Flex align="center" gap={3}>
              <Icon
                as={SiChakraui}
                boxSize={6}
                color="teal.300"
                aria-hidden="true"
              />
              <Text>{t.about.chakra}</Text>
            </Flex>
          </VStack>
        </MotionBox>
      </Flex>
    </Container>
  );
}
