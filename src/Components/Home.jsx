import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Link,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import { BsMouse } from "react-icons/bs";
  import { ImBold, ImLinkedin } from "react-icons/im";
  import { FaGithub } from "react-icons/fa";
  import { HiOutlineMail } from "react-icons/hi";
  import { AiOutlineArrowDown, AiOutlineDownload } from "react-icons/ai";
  import Typewriter from "typewriter-effect";
  import style from "../Styles/Home.module.css"
  import Pooja_Rathod_Resume from "../assets/Pooja_Rathod_Resume.pdf"


  // import img from "./userPic.png";
  const Home = () => {
    return (
      <>
      <Flex
        height={{ base: "80vh", lg: "100vh" }}
        maxHeight={"750px"}
        className="background"
        id="home"
        flexDir={{ base: "column-reverse", lg: "row" }}
        align={"center"}
        justify="center"
        gap={{ base: "20", md: "20", lg: "20" }}
        // border="2px solid red"
      >
        
        <Box
          height={{ base: "300px", md: "400px", lg: "500px" }}
          overflow="hidden"
          className="profile"
          boxShadow='md' p='4' rounded='md' bg='grey'
        >
          <Image
            src="https://media4.giphy.com/media/xT0Gqn9yuw8hnPGn5K/giphy.gif?cid=ecf05e47yjr3mk2niripgp86zdxf5ehblsq0ki9p44fez000&rid=giphy.gif&ct=g"
            borderRadius="1.2rem"
            
            height="100%"
          />
        </Box>
        <Flex
          maxWidth={{ base: "100%", lg: "40%" }}
          flexDir="column"
          gap="1rem"
          padding={"5px"}
        >
          <Heading style={{ paddingBottom: 5 }} className="heading">
          <div>Hey there <span class="waving-hand">👋</span></div>
              </Heading>
          <Heading id="user-detail-name"> I am Pooja Rathod</Heading>
          <Typewriter

          
            options={{
               strings: ["Full Stack Web Developer"],
                autoStart: true,
                loop: true,
              deleteSpeed: 40,
            }}
          />
          
          <Text  id="user-detail-intro">
          Aspiring Full Stack Web Developer Skilled in MERN stack with hands-on experience in developing scalable websites using a wide range of Front-end and Back-end skills like HTML, CSS, JavaScript, React, MongoDB, and Node JS. 
          </Text>
          <Flex gap={"8"} align="center">
            <a id="resume-link-2" target="_blank" 
            href={Pooja_Rathod_Resume} 
            download
             >
               <Button
              width="max-content"
              colorScheme={"teal"}
              id="resume-button-1"
              className="nav-link resume"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1rOjZru0azTqSzZTzFyWgie_jkw-hRkGz/view?usp=sharing",
                  "_blank"
                );
              }}
            >
              <a
                id="resume-link-1"
                href={Pooja_Rathod_Resume}
                target="_blank"
                download="Pooja_Rathod_Resume.pdf"
              >
                Resume
              </a>
              <Text as="span" ml={"2"}>
                <AiOutlineDownload fontSize={"1.2rem"} />
              </Text>
            </Button>
            </a>
            <Flex gap="3">
              <Link id="contact-linkedin" href='https://www.linkedin.com/in/pooja-rathod-9a133323b/' isExternal>
                <ImLinkedin fontSize={"1.6rem"} />
              </Link>
              <Link id="contact-github" href="https://github.com/PoojaRathod5" isExternal>
                <FaGithub fontSize={"1.6rem"} />
              </Link>
              <Link  id="contact-email" href="https://poojachavan8669@gmail.com" isExternal>
                <HiOutlineMail fontSize={"1.6rem"} />
              </Link>
            </Flex>
          </Flex>
          <Box marginTop={"4rem"} display={{ base: "none", lg: "block" }}>
            <Flex align={"center"} gap="2">
              <span>
                <BsMouse fontSize={"1.4rem"} />
              </span>
              <Text>scroll down</Text>
              <span>
                <AiOutlineArrowDown />
              </span>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      </>
    );
  };
  
  export default Home;