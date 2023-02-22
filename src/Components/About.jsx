import React from 'react'
import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Link,
    Text,
  } from "@chakra-ui/react";
  import myImage from "../assets/profile.jpg"

const About = () => {
  return (
    <>
   <Text fontSize="4xl" fontWeight="600"   id="about" className="about section"  margin="auto" textAlign="center" >About me</Text>
    <Flex 
    height="55vh"
    border="1px solid red"
    width="85%"
    margin="auto"
    >    
     <Box width="35%" padding="20px">
      <Image width="80%" className="home-img"  margin="auto" border="2px solid grey" borderRadius="10%" src={myImage}/>
     </Box>
     <Box padding="50px" alignItems="center" alignContent="center" height="100%" width="65%">
       <Box alignItems="center" >
       <Text id="user-detail-intro" >
              Hey, My name is Pooja Rathod. I have completed my Bachelor of
              Engineering from Deogiri College of Engineering, Auranhabad,Maharashtra.
              <br />
              <br />
              Currently, I have expertise in C, C++, HTML, CSS, JavaScript, React and TypeScript. 
              I also have knowledge of SQL. Apart from programming, I enjoy reading 📚,
               photography 📸, listening to music 🎵
              and Shopping.
              <br />
              <br />
             Aspiring Full Stack Web Developer Skilled in MERN stack with hands-on experience in developing scalable websites using a wide range of Front-end and Back-end skills like HTML, CSS, JavaScript, React, MongoDB, and Node JS. Looking forward to joining a progressive organization with opportunities to work on challenging projects.
          </Text>
       </Box>
      </Box>
    </Flex>
    </>
  )
}

export default About