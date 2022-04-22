import { Box, Container, Heading, Form, Field } from '@chakra-ui/react'
import { Formik } from 'formik'
import React from 'react'


const Contact = () => {
  return (
    <Box py='50px'>
      <Container maxW='container.lg'>
        <Box>
          <Box>
            <Heading textAlign='center'>
              Contact Me
            </Heading>
          </Box>
          <Box>
            <Formik>

            </Formik>
          </Box>
        </Box>
      </Container>
    </Box>
  )
} 

export default Contact
