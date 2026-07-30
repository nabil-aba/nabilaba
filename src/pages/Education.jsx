import {
  Badge,
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaGraduationCap, FaStar } from "react-icons/fa";

import { useLang } from "../context/LanguageContext";

const MotionBox = motion.create(Box);

export default function Education() {
  const { t } = useLang();

  return (
    <Container maxW="container.lg" py={20} id="education">
      <Heading
        textAlign="center"
        size="2xl"
        mb={12}
        bgGradient="linear(to-r, yellow.400, orange.400)"
        bgClip="text"
      >
        {t.education.title}
      </Heading>

      <VStack spacing={6} align="stretch">
        {t.education.items.map((edu, index) => (
          <MotionBox
            key={index}
            p={8}
            bg="whiteAlpha.50"
            borderRadius="2xl"
            border="1px solid"
            borderColor={index === 0 ? "yellow.500" : "whiteAlpha.200"}
            boxShadow={
              index === 0 ? "0 0 20px rgba(236, 201, 75, 0.1)" : "none"
            }
            whileHover={{ borderColor: "#ECC94B" }}
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              align="start"
              gap={6}
            >
              <Box
                p={4}
                bg={index === 0 ? "rgba(236, 201, 75, 0.1)" : "whiteAlpha.100"}
                borderRadius="xl"
                flexShrink={0}
              >
                <Icon
                  as={FaGraduationCap}
                  boxSize={8}
                  color={index === 0 ? "yellow.400" : "gray.400"}
                  aria-hidden="true"
                />
              </Box>

              <Box flex={1}>
                <HStack mb={3} flexWrap="wrap" spacing={2}>
                  <Badge
                    colorScheme={index === 0 ? "yellow" : "gray"}
                    variant="solid"
                    borderRadius="full"
                    px={3}
                    fontSize="sm"
                  >
                    {edu.degree}
                  </Badge>
                  <HStack color="gray.400" fontSize="sm">
                    <Icon as={FaCalendarAlt} aria-hidden="true" />
                    <Text>{edu.date}</Text>
                  </HStack>
                </HStack>

                <Heading size="md" color="white" mb={1}>
                  {edu.institution}
                </Heading>
                <Text color="yellow.300" fontWeight="bold" fontSize="sm" mb={3}>
                  {edu.field}
                </Text>
                <Text color="gray.400" fontSize="sm" mb={3}>
                  {edu.description}
                </Text>

                {edu.gpa && (
                  <HStack>
                    <Icon
                      as={FaStar}
                      color="yellow.400"
                      boxSize={4}
                      aria-hidden="true"
                    />
                    <Text fontSize="sm" color="yellow.300" fontWeight="bold">
                      GPA: {edu.gpa}
                    </Text>
                  </HStack>
                )}
              </Box>
            </Flex>
          </MotionBox>
        ))}
      </VStack>
    </Container>
  );
}
