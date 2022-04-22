import { Container, Box, Text, Heading } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box 
      backgroundImage="url('/images/home-bg.jpg')"
      backgroundPosition='center'
      h='100vh'
    >
      <Container h='100%' maxW='container.lg'>
        <Box h='100%' w='100%' color='#fff' d='inline-flex' flexDir='column' justifyContent='center' alignItems='center'>
          <Box textAlign='center' w='80%'>
            <Heading fontWeight='500' lineHeight='60px' fontSize='2.2em' mt='30px'>Hi, I'm Manuel Benites</Heading>
            <Text fontSize='1.4em' color='#ffffffa8'>Front-End Developer</Text>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Home
