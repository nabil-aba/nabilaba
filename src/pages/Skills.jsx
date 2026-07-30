import {
  Box,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaBlogger,
  FaBolt,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaJava,
  FaMarkdown,
  FaNetworkWired,
  FaNodeJs,
  FaNpm,
  FaPython,
  FaReact,
  FaRobot,
  FaServer,
  FaSmile,
  FaWhatsapp,
  FaWordpress,
  FaYarn,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiCanva,
  SiChakraui,
  SiCss3,
  SiExpress,
  SiGatsby,
  SiHeroku,
  SiHtml5,
  SiJavascript,
  SiKaggle,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiPhp,
  SiPostgresql,
  SiVercel,
  SiVisualstudiocode,
  SiVite,
  SiXampp,
} from "react-icons/si";

import { useLang } from "../context/LanguageContext";

const MotionBox = motion.create(Box);

const skills = [
  { name: "aaPanel", icon: FaServer, color: "#20B2AA" },
  { name: "Blogger", icon: FaBlogger, color: "#FF5722" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Canva", icon: SiCanva, color: "#00C4CC" },
  { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Express.js", icon: SiExpress, color: "white" },
  { name: "Gatsby", icon: SiGatsby, color: "#663399" },
  { name: "Github", icon: FaGithub, color: "#ffffff" },
  { name: "Gradio", icon: FaRobot, color: "#FF9900" },
  { name: "Groq", icon: FaBolt, color: "#F55036" },
  { name: "Heroku", icon: SiHeroku, color: "#430098" },
  { name: "Hostinger", icon: FaServer, color: "#673AB7" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "HuggingFace", icon: FaSmile, color: "#FFD21E" },
  { name: "ImprovMX", icon: FaEnvelope, color: "#FF3366" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Kaggle", icon: SiKaggle, color: "#20BEFF" },
  { name: "Mail Server", icon: FaEnvelope, color: "#4CAF50" },
  { name: "MDX", icon: FaMarkdown, color: "white" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "NPM", icon: FaNpm, color: "#CB3837" },
  { name: "OpenRouter", icon: FaNetworkWired, color: "#4A90E2" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "React.js", icon: FaReact, color: "#61DAFB" },
  { name: "Shell Script", icon: FaCode, color: "#aaaaaa" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "VS Code", icon: SiVisualstudiocode, color: "#007ACC" },
  { name: "whatsapp-web.js", icon: FaWhatsapp, color: "#25D366" },
  { name: "WordPress", icon: FaWordpress, color: "#21759B" },
  { name: "XAMPP", icon: SiXampp, color: "#FB7A24" },
  { name: "Yarn", icon: FaYarn, color: "#2C8EBB" },
];

export default function Skills() {
  const { t } = useLang();

  return (
    <Container maxW="container.lg" py={20} id="skills">
      <Heading
        textAlign="center"
        size="2xl"
        mb={12}
        bgGradient="linear(to-r, cyan.400, pink.400)"
        bgClip="text"
      >
        {t.skills.title}
      </Heading>

      <SimpleGrid columns={{ base: 2, md: 4, lg: 5 }} spacing={8}>
        {skills.map((skill, index) => (
          <MotionBox
            key={index}
            bg="whiteAlpha.50"
            p={6}
            borderRadius="xl"
            textAlign="center"
            border="1px solid"
            borderColor="whiteAlpha.100"
            transition={{ duration: 0.3 }}
          >
            <Icon
              as={skill.icon}
              boxSize={12}
              color={skill.color}
              mb={4}
              aria-hidden="true"
            />
            <Text fontWeight="bold" fontSize="lg">
              {skill.name}
            </Text>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Container>
  );
}
