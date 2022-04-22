import { Box, Container, Text, ListItem, List, Link, Icon } from "@chakra-ui/react";
import { GrLinkedin, GrGithub, GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <Box pb='30px' pt='20px'>
      <Container maxW="container.lg">
        <Box textAlign='center'>
          <List mb="15px" fontSize="1.25rem">
            <ListItem d="inline-block" mx="30px">
              <Link>
                <Icon
                  as={GrLinkedin}
                  _hover={{ color: "#48b14d" }}
                  transition="200ms"
                />
              </Link>
            </ListItem>
            <ListItem d="inline-block" mx="30px">
              <Link>
                <Icon
                  as={GrGithub}
                  _hover={{ color: "#48b14d" }}
                  transition="200ms"
                />
              </Link>
            </ListItem>
            <ListItem d="inline-block" mx="30px">
              <Link>
                <Icon
                  as={GrInstagram}
                  _hover={{ color: "#48b14d" }}
                  transition="200ms"
                />
              </Link>
            </ListItem>
          </List>
          <Text>©2022 Manuel</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
