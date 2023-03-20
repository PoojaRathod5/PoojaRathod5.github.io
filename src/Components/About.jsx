import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import myImage from "../assets/profile.jpg"


const About = () => {
  return (
    <Box 
    id="about"
        className="about section"
    
    >
      <Text fontSize="4xl" fontWeight="600" margin="auto" textAlign="center">
        About me
      </Text>
      <Flex
        height={{ base: "95vh", md: "60vh", lg: "55vh" }}
        width="85%"
        margin="auto"
        id="about"
        className="about section"
        flexDir={{ base: "column", md: "row", lg: "row" }}
      >
        <Box width={{ base: "100%", md: "50%", lg: "25%" }} marginTop={"10px"}>
          <Image
            className="home-img"
            margin="auto"
            border="4px solid teal"
            borderRadius="20%"
           src={myImage}
          />
        </Box>
        <Box
          padding={{ base: "0px", md: "40px", lg: "50px" }}
          marginTop={{ base: "30px", md: "20px", lg: "30px" }}
          alignItems="center"
          alignContent="center"
          height="100%"
          width={{ base: "100%", md: "50%", lg: "65%" }}
        >
          <Text id="user-detail-intro">
          Hey, My name is Pooja Rathod. I have completed my Bachelor of
              Engineering from Deogiri College of Engineering, Auranhabad,Maharashtra.
              <br />
              <br />
              Currently, I have expertise in MERN,C, C++, HTML, CSS, JavaScript, React, MongoDB and TypeScript. 
              I also have knowledge of SQL. Apart from programming, I enjoy reading 📚,
               photography 📸, listening to music 🎵
              and Shopping.
              <br />
              <br />
             Aspiring Full Stack Web Developer Skilled in MERN stack with hands-on experience in developing scalable
              websites using a wide range of Front-end and Back-end skills like HTML, CSS, JavaScript, React, MongoDB, 
              and Node JS. Looking forward to joining a progressive organization with opportunities to work on challenging 
              projects.

           
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;







