import {
  Box,
  Container,
  Heading,
  Grid,
  GridItem,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import {
  SiNeovim,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiMysql,
  SiGit,
  SiGithub
} from "react-icons/si";

const skillsInfo = [
  {
    id: "1",
    icon: SiNeovim,
    name: "Neovim",
  },
  {
    id: "2",
    icon: SiReact,
    name: "React",
  },
  {
    id: "3",
    icon: SiNodedotjs,
    name: "NodeJs",
  },
  {
    id: "4",
    icon: SiJavascript,
    name: "JavaScript",
  },
  {
    id: "5",
    icon: SiCss3,
    name: "CSS",
  },
  {
    id: "6",
    icon: SiHtml5,
    name: "HTML",
  },
  {
    id: "7",
    icon: SiMysql,
    name: "MySQL",
  },
  {
    id: "8",
    icon: SiGit,
    name: "Git",
  },
  {
    id: "9",
    icon: SiGithub,
    name: "Github",
  }
];

const Skills = () => {
  return (
    <Box bg="#f2f2f2" py="50px">
      <Container maxW={{sm: 'container.sm', md: 'container.md', lg: 'container.lg'}}>
        <Box>
          <Heading textAlign="center" mb="50px">
            Skills & Tools
          </Heading>
        </Box>
        <Flex d="inline-flex" justify="center" align="center" wrap="wrap">
          {skillsInfo.map((element) => {
            return (
              <Box
                key={element.id}
                bg="#ffffff"
                w="115px"
                h="115px"
                m="10px"
                d="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box d="inline-block" textAlign="center">
                  <Icon fontSize="50px" as={element.icon} />
                  <Text fontWeight="bold" fontSize="16px">
                    {element.name}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
};

export default Skills;
