import {
  Badge,
  Box,
  Button,
  Circle,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Tag,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaBook,
  FaCertificate,
  FaExternalLinkAlt,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";
import { SiCanva } from "react-icons/si";

import { useLang } from "../context/LanguageContext";

const MotionBox = motion.create(Box);

export default function Projects() {
  const [activeTab, setActiveTab] = useState("React");
  const { t } = useLang();
  const projectData = t.projects.items;

  useEffect(() => {
    const handler = (e) => setActiveTab(e.detail);
    window.addEventListener("switchProjectTab", handler);
    return () => window.removeEventListener("switchProjectTab", handler);
  }, []);

  const TAB_LABELS = {
    React: "React",
    PHP: "PHP",
    Others: t.projects.others,
    Content: "Content",
    Consulting: t.projects.consulting,
  };

  return (
    <Container maxW="container.xl" py={20} id="projects">
      <Heading
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="black"
        mb={12}
        textAlign="center"
      >
        {t.projects.title}
      </Heading>

      <Flex justify="center" mb={12} wrap="wrap" gap={2}>
        {Object.keys(projectData).map((tab) => (
          <Button
            key={tab}
            onClick={() => setActiveTab(tab)}
            variant={activeTab === tab ? "solid" : "ghost"}
            bg={
              activeTab === tab
                ? tab === "Consulting"
                  ? "orange.600"
                  : "purple.600"
                : "transparent"
            }
            color={activeTab === tab ? "white" : "gray.200"}
            borderRadius="full"
            size="sm"
            px={8}
            fontWeight="bold"
            _hover={{
              bg:
                activeTab === tab
                  ? tab === "Consulting"
                    ? "orange.700"
                    : "purple.700"
                  : "whiteAlpha.300",
              color: "white",
            }}
          >
            {TAB_LABELS[tab] ?? tab}
          </Button>
        ))}
      </Flex>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: activeTab === "Consulting" ? 2 : 3 }}
        spacing={8}
      >
        {projectData[activeTab].map((project, i) =>
          activeTab === "Consulting" ? (
            <MotionBox
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <Box
                bg="whiteAlpha.50"
                p={6}
                borderRadius="xl"
                border="2px solid"
                borderColor={
                  project.inProgress ? "orange.400" : "whiteAlpha.200"
                }
                h="full"
                display="flex"
                flexDirection="column"
                gap={3}
                transition="all 0.2s"
              >
                <Flex justify="space-between" align="start">
                  <Heading size="md" color="white" flex={1}>
                    {project.title}
                  </Heading>
                  {project.inProgress && (
                    <Badge
                      bg="orange.500"
                      color="white"
                      variant="solid"
                      borderRadius="full"
                      px={3}
                      ml={2}
                      flexShrink={0}
                    >
                      {t.projects.inProgress}
                    </Badge>
                  )}
                </Flex>

                <HStack spacing={2}>
                  {project.isAuthor ? (
                    <Badge
                      bg="green.600"
                      color="white"
                      variant="solid"
                      borderRadius="full"
                      px={2}
                      fontSize="xs"
                    >
                      ✓ Co-Author
                    </Badge>
                  ) : (
                    <Badge
                      borderColor="gray.400"
                      color="gray.300"
                      variant="outline"
                      borderRadius="full"
                      px={2}
                      fontSize="xs"
                    >
                      • Contributor
                    </Badge>
                  )}
                </HStack>

                <Text color="gray.400" fontSize="sm" flex={1}>
                  {project.desc}
                </Text>

                <Text fontSize="xs" color="cyan.300">
                  📍 {project.location}
                </Text>
                <Text fontSize="xs" color="purple.300">
                  🗓 {project.date}
                </Text>
                <Text fontSize="xs" color="pink.300" fontWeight="bold">
                  {t.projects.contributedAs}: {project.role}
                </Text>

                <HStack wrap="wrap" spacing={2}>
                  {project.tech.map((tag, idx) => (
                    <Tag
                      key={idx}
                      size="sm"
                      variant="subtle"
                      bg="orange.900"
                      color="orange.200"
                      borderRadius="full"
                    >
                      {tag}
                    </Tag>
                  ))}
                </HStack>

                <Flex direction="column" gap={2} mt="auto">
                  {project.journal && (
                    <Link href={project.journalLink} isExternal>
                      <Button
                        size="sm"
                        w="full"
                        variant="outline"
                        colorScheme="purple"
                        leftIcon={<FaBook aria-hidden="true" />}
                        rightIcon={
                          <FaExternalLinkAlt size="10px" aria-hidden="true" />
                        }
                        isDisabled={
                          !project.journalLink || project.journalLink === "#"
                        }
                      >
                        {project.journal}
                      </Button>
                    </Link>
                  )}
                  {project.hki && (
                    <HStack
                      px={3}
                      py={2}
                      bg="rgba(237,137,54,0.1)"
                      borderRadius="md"
                      border="1px solid"
                      borderColor="orange.700"
                      fontSize="xs"
                      color="orange.300"
                    >
                      <Icon as={FaCertificate} aria-hidden="true" />
                      <Text>HKI: {project.hki}</Text>
                    </HStack>
                  )}
                </Flex>
              </Box>
            </MotionBox>
          ) : (
            <MotionBox
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <Box
                bg="whiteAlpha.50"
                p={6}
                borderRadius="xl"
                border="3px solid"
                borderColor="black"
                boxShadow="6px 6px 0px black"
                h="full"
                display="flex"
                flexDirection="column"
                position="relative"
                overflow="hidden"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                  width: "150%",
                  height: "100%",
                  bgGradient:
                    "radial(rgba(139, 92, 246, 0.15) 0%, transparent 60%)",
                  zIndex: 0,
                  pointerEvents: "none",
                }}
                _hover={{ boxShadow: "8px 8px 0px black" }}
                transition="all 0.2s"
              >
                <HStack spacing={2} mb={4} zIndex={1}>
                  <Circle size="10px" bg="#FF5F56" />
                  <Circle size="10px" bg="#FFBD2E" />
                  <Circle size="10px" bg="#27C93F" />
                </HStack>

                <Flex justify="space-between" align="start" mb={4} zIndex={1}>
                  <Heading size="md" color="white" flex={1}>
                    {project.title}
                  </Heading>
                  {project.location && (
                    <Box ml={2}>
                      <SiCanva color="#00C4CC" size="24px" aria-hidden="true" />
                    </Box>
                  )}
                </Flex>

                <Text color="gray.400" fontSize="sm" mb={4} flex={1} zIndex={1}>
                  {project.desc}
                </Text>

                {project.location && (
                  <Text fontSize="xs" color="cyan.300" mb={2} zIndex={1}>
                    📍 {project.location}
                  </Text>
                )}
                {project.date && (
                  <Text fontSize="xs" color="purple.300" mb={2} zIndex={1}>
                    🗓 {project.date}
                  </Text>
                )}
                {project.role && (
                  <Text
                    fontSize="xs"
                    color="pink.300"
                    mb={4}
                    fontWeight="bold"
                    zIndex={1}
                  >
                    {t.projects.role}: {project.role}
                  </Text>
                )}

                <HStack wrap="wrap" spacing={2} mb={6} zIndex={1}>
                  {project.tech.map((tag, idx) => (
                    <Tag
                      key={idx}
                      size="sm"
                      variant="subtle"
                      bg="purple.900"
                      color="purple.200"
                      borderRadius="full"
                    >
                      {tag}
                    </Tag>
                  ))}
                </HStack>

                <HStack spacing={4} mt="auto" zIndex={1}>
                  <Button
                    as="a"
                    href={project.link}
                    target="_blank"
                    size="sm"
                    flex={1}
                    variant="solid"
                    bg="purple.600"
                    color="white"
                    leftIcon={
                      project.location ? undefined : (
                        <FaGithub aria-hidden="true" />
                      )
                    }
                    border="2px solid black"
                    boxShadow="2px 2px 0px black"
                    isDisabled={project.link === "#"}
                    _hover={{
                      bg: "purple.700",
                      boxShadow:
                        project.link === "#"
                          ? "2px 2px 0px black"
                          : "4px 4px 0px black",
                    }}
                    _active={{
                      transform: "translate(0px, 0px)",
                      boxShadow: "1px 1px 0px black",
                    }}
                  >
                    {project.location
                      ? t.projects.viewMaterial
                      : t.projects.repository}
                  </Button>
                  {!project.location && (
                    <Button
                      as="a"
                      href={project.demo}
                      target="_blank"
                      size="sm"
                      flex={1}
                      variant="outline"
                      colorScheme="pink"
                      leftIcon={<FaGlobe aria-hidden="true" />}
                      isDisabled={project.demo === "#"}
                      border="2px solid"
                      borderColor={
                        project.demo === "#" ? "gray.600" : "pink.500"
                      }
                      boxShadow="2px 2px 0px black"
                      _hover={{
                        boxShadow:
                          project.demo === "#"
                            ? "2px 2px 0px black"
                            : "4px 4px 0px black",
                        bg: project.demo === "#" ? "transparent" : "pink.500",
                        color: project.demo === "#" ? "gray.500" : "white",
                      }}
                      _active={{
                        transform: "translate(0px, 0px)",
                        boxShadow: "1px 1px 0px black",
                      }}
                    >
                      {t.projects.liveDemo}
                    </Button>
                  )}
                </HStack>
              </Box>
            </MotionBox>
          ),
        )}
      </SimpleGrid>
    </Container>
  );
}
