import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from '../components/navbar'
import Home from '../components/home'
import About from '../components/about'
import Skills from '../components/skills'
import Portfolio from '../components/portfolio'
import Contact from '../components/contact'
import Footer from '../components/footer'

export default function Website() {
  return (
    <Box h='100%'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </Box>
  );
}
