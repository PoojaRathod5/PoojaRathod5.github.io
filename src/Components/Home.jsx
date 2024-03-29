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



const Home = () => {
  return (
    <Box
    // border="1px solid red"

    >
      <Flex
        height={{ base: "80vh", lg: "100vh" }}
        maxHeight={"750px"}
        className="background"
        id="home"
        flexDir={{ base: "column-reverse", lg: "row" }}
        align={"center"}
        justify="center"
        gap={{ base: "5", md: "10", lg: "20" }}
        marginTop="2rem"
      // border="2px solid red"

      >

        <Box
          maxHeight={{ base: "70%", md: "40%", lg: "70%", sm: "75%" }}
          overflow="hidden"
          className="profile"
          boxShadow='md' p='4' rounded='md' bg='grey'
        // border="1px solid red"
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
          marginTop={{ base: "1rem", md: "1rem", sm: "5rem" }}
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

          <Text>
            Aspiring Full Stack Web Developer Skilled in MERN stack with hands-on experience in developing scalable websites using a wide range of Front-end and Back-end skills like HTML, CSS, JavaScript, React, MongoDB, and Node JS.
          </Text>
          <Flex gap={"8"} align="center">
            {/* <Button
              width="max-content"
              colorScheme={"teal"}
              id="resume-button-2"
              //className="nav-link resume"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1rOjZru0azTqSzZTzFyWgie_jkw-hRkGz/view?usp=sharing",
                  "_blank"
                );
                const link = document.createElement("a");
                link.setAttribute("id", "resume-link-2");
                link.href = Pooja_Rathod_Resume;
                link.download = "Pooja_Rathod_Resume.pdf";
                link.click();
              }}
            >
              Resume
              <Text as="span" ml={"2"}>
                <AiOutlineDownload fontSize={"1.2rem"} />
              </Text>
            </Button> */}
            <Button
              id="resume-button-2"
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              width="max-content"
              colorScheme={"teal"}
              href={"#"}
              _hover={{
                bg: "blue.600",
              }}
            >
              <Link
                id="resume-link-2"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/155bn9yvDFFnbO9vWU081QMqRp5lFe2Q3/view?usp=sharing"
                  )
                }
                href={Pooja_Rathod_Resume}
                target={"_blank"}
                download
              >Resume</Link>
            </Button>

            <Flex gap="3">
              <Link id="contact-linkedin" href='https://www.linkedin.com/in/pooja-rathod-9a133323b/' isExternal>
                <ImLinkedin fontSize={"1.6rem"} />
              </Link>
              <Link id="contact-github" href="https://github.com/PoojaRathod5" isExternal>
                <FaGithub fontSize={"1.6rem"} />
              </Link>
              <Link id="contact-email" href="https://poojachavan8669@gmail.com" isExternal>
                <HiOutlineMail fontSize={"1.6rem"} />
              </Link>
            </Flex>
          </Flex>
          <Box marginTop={"4rem"} display={{ base: "none", lg: "block" }}>
            <Flex align={"center"} gap="2">
              <span>
                <BsMouse fontSize={"1.4rem"} />
              </span>
              <span>
                <AiOutlineArrowDown />
              </span>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
