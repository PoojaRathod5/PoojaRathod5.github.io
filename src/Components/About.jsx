import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import myImage from "../assets/profile.jpg"

const About = () => {
  return (
    <Box 
      id="about"
      className="about section"
      padding={{ base: "20px", md: "40px" }}
  
    >
      <Text 
        fontSize={{ base: "2xl", md: "4xl" }} 
        fontWeight="600" 
        margin="auto" 
        textAlign="center"
      >
        About me
      </Text>
      <Flex
        width="100%"
        margin="auto"
        flexDir={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems={{ base: "center", md: "flex-start" }}
      >
        
        <Box
          padding={{ base: "20px", md: "40px" }}
          marginTop={{ base: "30px", md: "20px" }}
          width={{ base: "100%", md: "50%" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text id="user-detail-intro" fontSize={{ base: "lg", md: "xl" }}>
            Hey, My name is Pooja Rathod. I have completed my Bachelor of Engineering from Deogiri College of Engineering, Sambhajinagar,Maharashtra.
            <br />
            <br />
            Currently, I have expertise in MERN, C, C++, HTML, CSS, JavaScript, React, MongoDB, Node.js and TypeScript. I also have knowledge of SQL. Looking forward to joining a progressive organization with opportunities to work on challenging projects. Apart from programming, I enjoy reading 📚, photography 📸, listening to music 🎵, and shopping.
            <br />
            <br />
          
          </Text>
        </Box>
        <Box 
          width={{ base: "80%", md: "22%" }} 
          marginTop={{ base: "20px", md: "10px" }}
        >
          <Image
            className="home-img"
            margin="auto"
            // border="4px solid "
            // borderRadius="10%"
            src={myImage}
            width={{ base: "80%", md: "100%" }}
            maxWidth="400px"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
