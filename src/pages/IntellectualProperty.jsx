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
  FaCertificate,
  FaCopyright,
  FaExternalLinkAlt,
  FaUserTie,
} from "react-icons/fa";

import { useLang } from "../context/LanguageContext";

const MotionBox = motion.create(Box);

export default function IntellectualProperty() {
  const { t } = useLang();

  return (
    <Container maxW="container.lg" py={10} id="ipr">
      <Heading
        textAlign="center"
        size="xl"
        mb={12}
        bgGradient="linear(to-r, orange.400, yellow.400)"
        bgClip="text"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={3}
      >
        {t.ipr.title}
      </Heading>

      <VStack spacing={6} align="stretch">
        {t.ipr.items.map((ipr, index) => (
          <MotionBox
            key={index}
            p={8}
            bgGradient="linear(to-br, rgba(237, 137, 54, 0.05), rgba(0, 0, 0, 0))"
            borderRadius="2xl"
            border="1px solid"
            borderColor="orange.500"
            boxShadow="0 0 20px rgba(237, 137, 54, 0.1)"
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              align="start"
              justify="space-between"
              gap={6}
            >
              <Box>
                <HStack mb={2}>
                  <Badge
                    colorScheme="orange"
                    fontSize="sm"
                    px={3}
                    py={1}
                    borderRadius="full"
                  >
                    {t.ipr.badgeCopyright}
                  </Badge>
                  <Badge
                    colorScheme="purple"
                    fontSize="sm"
                    px={3}
                    py={1}
                    borderRadius="full"
                    variant="outline"
                  >
                    ID: {ipr.id}
                  </Badge>
                </HStack>

                <Heading size="md" mb={3} color="white">
                  {ipr.title}
                </Heading>

                <HStack
                  spacing={6}
                  color="gray.300"
                  fontSize="sm"
                  flexWrap="wrap"
                >
                  <HStack>
                    <Icon
                      as={FaUserTie}
                      color="orange.400"
                      aria-hidden="true"
                    />
                    <Text>
                      {t.ipr.role}:{" "}
                      <Text as="span" fontWeight="bold" color="white">
                        {ipr.role}
                      </Text>
                    </Text>
                  </HStack>
                  <HStack>
                    <Icon
                      as={FaCopyright}
                      color="orange.400"
                      aria-hidden="true"
                    />
                    <Text>
                      {t.ipr.year}: {ipr.year}
                    </Text>
                  </HStack>
                  <HStack>
                    <Icon
                      as={FaCertificate}
                      color="orange.400"
                      aria-hidden="true"
                    />
                    <Text>
                      {t.ipr.lead}: {ipr.lead}
                    </Text>
                  </HStack>
                </HStack>
              </Box>
            </Flex>
          </MotionBox>
        ))}
      </VStack>

      <Flex justify="center" mt={8}>
        <Button
          as="a"
          href="https://sinta.kemdiktisaintek.go.id/authors/profile/5972541/?view=iprs"
          target="_blank"
          colorScheme="orange"
          variant="outline"
          size="sm"
          rightIcon={<FaExternalLinkAlt aria-hidden="true" />}
          _hover={{ bg: "orange.500", color: "white" }}
        >
          {t.ipr.verify}
        </Button>
      </Flex>
    </Container>
  );
}
