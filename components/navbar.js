import { Box, Container, Flex, Link, List, ListItem } from "@chakra-ui/react";
import { VscThreeBars } from "react-icons/vsc";
import setScale from '../hooks/setScale'

const Navbar = () => {
  const menuLinks = ['About', 'Portfolio', 'Contact']
  const { scale, toggleScale } = setScale()
  return (
    <Box w="100%" pos="fixed" left="0" top="0" color="#fff">
      <Container maxW={{sm: 'container.sm', md: 'container.md', lg: 'container.lg'}}>
        <Flex justifyContent="space-between" h="60px">
          <Box textTransform='uppercase' fontWeight='bold' d="flex" justifyContent="center" alignItems="center">
            <Link href="/"
              _focus={{
                border: 'none',
              }}
              _hover={{
                textDecoration: 'none',
              }}
            >
              Manuel
            </Link>
          </Box>
          <Box d={{base: 'flex', md: 'none'}} justifyContent="center" alignItems="center">
            <Link onClick={toggleScale}>
              <VscThreeBars fontSize="25px" />
            </Link>
          </Box>
          <Box d={{base: 'none', md: 'block'}}>
            <List d='flex' alignItems='center' h='100%' fontSize='14px'>
              {
                menuLinks.map(link => {
                  return (
                     <Link key={link}>
                       <ListItem px='20px' py='10px'>
                        {link}
                       </ListItem>
                     </Link>
                  )
              })
              }
            </List>
          </Box>
        </Flex>
        <Box bg='#fff' color='#000' transformOrigin='top' transform={scale} transition='300ms'>
          <List px='15px' letterSpacing='1px' py='10px' fontSize='0.9em' fontWeight='bold'>
            {
              menuLinks.map(link => {
                return (
                  <ListItem key={link}>
                    <Link d='block' py='10px'>
                      {link}
                    </Link>
                  </ListItem>
                )
            })
            }
          </List>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
