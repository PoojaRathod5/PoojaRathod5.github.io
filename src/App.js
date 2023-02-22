
import { Box } from '@chakra-ui/react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Github from './Components/Github';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
function App() {
  return (
    <>
    <Box maxW={"100vw"}>
      <Navbar />
      <Box maxWidth={{ base: "96vw", lg: "90vw" }} margin="auto">
        <Home />
        <About/>
        <Skills/>
        <Projects/>
        <Github/>
      </Box>
      <Contact/>
    </Box>
    </>
  );
}

export default App;