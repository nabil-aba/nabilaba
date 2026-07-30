import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaChartLine,
  FaCode,
  FaGraduationCap,
  FaProjectDiagram,
  FaTrophy,
} from "react-icons/fa";

import { useLang } from "../context/LanguageContext";

const MotionBox = motion.create(Box);

const ICON_MAP = {
  FaChartLine,
  FaCode,
  FaTrophy,
  FaGraduationCap,
};

export default function Experiences() {
  const { t } = useLang();

  const scrollToConsulting = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent("switchProjectTab", { detail: "Consulting" }),
        );
      }, 600);
    }
  };

  return (
    <Container maxW="container.lg" py={20} id="experience">
      <Heading
        textAlign="center"
        size="2xl"
        mb={16}
        bgGradient="linear(to-r, cyan.400, pink.400)"
        bgClip="text"
      >
        {t.experiences.title}
      </Heading>

      <VStack spacing={8} align="stretch" position="relative">
        <Box
          position="absolute"
          left={{ base: "20px", md: "50%" }}
          top="0"
          bottom="0"
          w="2px"
          bg="whiteAlpha.200"
          transform={{ md: "translateX(-50%)" }}
          zIndex={0}
        />

        {t.experiences.items.map((exp, index) => (
          <Flex
            key={index}
            direction={{
              base: "column",
              md: index % 2 === 0 ? "row" : "row-reverse",
            }}
            justify="space-between"
            align="center"
            position="relative"
            zIndex={1}
          >
            <MotionBox
              w={{ base: "calc(100% - 50px)", md: "45%" }}
              ml={{ base: "50px", md: 0 }}
              p={6}
              bg={exp.highlight ? "rgba(49, 151, 149, 0.1)" : "whiteAlpha.100"}
              borderRadius="xl"
              border="1px solid"
              borderColor={exp.highlight ? "cyan.500" : "whiteAlpha.200"}
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                top: "20px",
                [index % 2 === 0 ? "right" : "left"]: { md: "-10px" },
                left: { base: "-10px", md: "auto" },
                borderTop: "10px solid transparent",
                borderBottom: "10px solid transparent",
                [index % 2 === 0 ? "borderLeft" : "borderRight"]: {
                  md: `10px solid ${exp.highlight ? "#2C7A7B" : "rgba(255, 255, 255, 0.08)"}`,
                },
                borderRight: {
                  base: `10px solid ${exp.highlight ? "#2C7A7B" : "rgba(255, 255, 255, 0.08)"}`,
                  md: "none",
                },
              }}
            >
              <HStack justify="space-between" mb={2}>
                <Badge
                  colorScheme={exp.highlight ? "cyan" : "gray"}
                  variant="solid"
                  borderRadius="full"
                  px={3}
                >
                  {exp.type}
                </Badge>
                <HStack color="gray.400" fontSize="sm">
                  <Icon as={FaCalendarAlt} />
                  <Text>{exp.date}</Text>
                </HStack>
              </HStack>

              <Heading
                size="md"
                color="white"
                mb={1}
                display="flex"
                alignItems="center"
                gap={2}
              >
                {exp.role}
                {exp.highlight && (
                  <Icon as={FaTrophy} color="yellow.400" w={4} h={4} />
                )}
              </Heading>
              <Text color="purple.300" fontWeight="bold" mb={3} fontSize="sm">
                @ {exp.company}
              </Text>
              <Text color="gray.400" fontSize="sm">
                {exp.description}
              </Text>

              {exp.achievements && exp.achievements.length > 0 && (
                <HStack spacing={2} mt={3} wrap="wrap">
                  {exp.achievements.map((ach, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      colorScheme={
                        exp.icon === "FaGraduationCap" ? "cyan" : "yellow"
                      }
                      fontSize="xs"
                      px={2}
                      py={1}
                      borderRadius="md"
                      textTransform="none"
                    >
                      {ach}
                    </Badge>
                  ))}
                </HStack>
              )}

              {exp.icon === "FaGraduationCap" && (
                <Button
                  mt={4}
                  size="xs"
                  variant="outline"
                  colorScheme="orange"
                  leftIcon={<FaProjectDiagram />}
                  borderRadius="full"
                  onClick={scrollToConsulting}
                  _hover={{
                    bg: "orange.500",
                    color: "white",
                    borderColor: "orange.500",
                  }}
                >
                  {t.experiences.viewConsulting}
                </Button>
              )}
            </MotionBox>

            <Box
              position="absolute"
              left={{ base: "20px", md: "50%" }}
              transform="translateX(-50%)"
              w="10"
              h="10"
              bg="#0a0a12"
              borderRadius="full"
              border="2px solid"
              borderColor="cyan.400"
              display="flex"
              alignItems="center"
              justifyContent="center"
              zIndex={2}
            >
              <Icon
                as={ICON_MAP[exp.icon] ?? FaCode}
                color="cyan.400"
                w={4}
                h={4}
              />
            </Box>

            <Box w={{ base: "0", md: "45%" }} />
          </Flex>
        ))}
      </VStack>
    </Container>
  );
}
