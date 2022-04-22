import { Box, Container, Text, List, ListItem, Link, Icon } from "@chakra-ui/react";
import { GrInstagram, GrLinkedin, GrGithub } from 'react-icons/gr'

const About = () => {
  return (
    <Box py="50px">
      <Container maxW={{sm: 'container.sm', md: 'container.md', lg: 'container.lg'}}>
        <Box textAlign='center'>
          <Text fontWeight="bold" fontSize="1.20rem" mb='20px'>
            Web Developer from Peru
          </Text>
          <Text mb='20px' fontSize='1rem'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh
            felis, rutrum id eleifend nec, viverra ac nunc. Fusce sit amet
            interdum metus, a interdum massa. Nullam gravida, elit sed mattis
            semper, libero leo convallis mi, et elementum magna tortor sed
            tortor. Aliquam hendrerit metus non enim fringilla, eu molestie ante
            bibendum.
          </Text>
          <List mb='15px' fontSize='1.25rem'>
            <ListItem d='inline-block' mx='30px'>
              <Link>
                <Icon as={GrLinkedin} _hover={{color: '#48b14d'}} transition='200ms'/>
              </Link>
            </ListItem>
            <ListItem d='inline-block' mx='30px'>
              <Link>
                <Icon as={GrGithub} _hover={{color: '#48b14d'}} transition='200ms'/>
              </Link>
            </ListItem>
            <ListItem d='inline-block' mx='30px'>
              <Link>
                <Icon as={GrInstagram} _hover={{color: '#48b14d'}} transition='200ms'/>
              </Link>
            </ListItem>
          </List>
          <Link _hover={{textDecoration: 'none'}} >
            <Box 
              borderRadius='5px' 
              px='25px' 
              py='8px' 
              bg='#000' 
              color='#fff' 
              d='inline'
              transition='200ms'
              _hover={{bg: '#48b14d', transition: '200ms'}}
            >
              My Portfolio
            </Box>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
