import { Box, SimpleGrid, Heading, Container, Link, Image } from "@chakra-ui/react";

const works = [
  {
    key: 1,
    namepath: "/images/work1.jpg",
    tech: "Technologies",
    name: "Work 1",
    web: "",
    github: ""
  },
  {
    key: 2,
    namepath: "/images/work2.jpg",
    tech: "Technologies",
    name: "Work 2",
    web: "",
    github: ""
  },
  {
    key: 3,
    namepath: "/images/work3.jpg",
    tech: "Technologies",
    name: "Work 3",
    web: "",
    github: ""
  },
  {
    key: 4,
    namepath: "/images/work4.jpg",
    tech: "Technologies",
    name: "Work 4",
    web: "",
    github: ""
  },
  {
    key: 5,
    namepath: "/images/work5.jpg",
    tech: "Technologies",
    name: "Work 5",
    web: "",
    github: ""
  },
  {
    key: 6,
    namepath: "/images/work6.jpg",
    tech: "Technologies",
    name: "Work 6",
    web: "",
    github: ""
  },
];

const Portfolio = () => {
  return (
    <Box py="50px">
      <Container maxW={{sm: 'container.sm', md: 'container.md', lg: 'container.lg'}}>
        <Box textAlign="center">
          <Heading mb="40px">Projects</Heading>
        </Box>
        <SimpleGrid minChildWidth='250px' spacing='30px'> 
          {works.map((element) => {
            return (
              <Box
                key={element.key}
                d="inline-block"
                pos="relative"
                textAlign="center"
              >
                <Link>
                  <Box pos="relative">
                    <Box
                      bg="#fff"
                      top="10px"
                      bottom="10px"
                      left="10px"
                      right="10px"
                      transform="scale(0.1)"
                      transition="all .35s ease"
                      opacity="0"
                      pos="absolute"
                      _hover={{
                        transform: "scale(1)",
                        opacity: "1",
                      }}
                    >
                      <Box
                        pos="absolute"
                        top="0"
                        bottom="0"
                        left="0"
                        right="0"
                        d="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        {element.tech}
                      </Box>
                    </Box>
                    <Image w='100%' objectFit='cover' src={element.namepath} />
                  </Box>
                </Link>
              </Box>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Portfolio;
