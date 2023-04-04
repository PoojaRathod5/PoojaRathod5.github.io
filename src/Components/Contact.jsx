import React from "react";
import { BsFillTelephoneFill, BsGithub } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { Box, Flex, SimpleGrid, Text, Button} from "@chakra-ui/react";
import { RiMailSendFill } from "react-icons/ri";
import { Input, InputGroup, InputLeftElement, } from '@chakra-ui/react'
import {
  FormControl,
  PhoneIcon
} from '@chakra-ui/react'

const Contact = () => {
  return (
    <Box id="contact" w="90%" mt={{ base: "30px", md: "20px", lg: "60px" }} mb={{ base: "20px", md: "30px", lg: "60px" }}>
  <Box
    padding={{ base: "20px", md: "30px" }}
    height={{ base: "auto", md: "450px" }}
    mb={{ base: "50px", md: "150px" }}
  >
    <Box w="max-content" align="center" className="heading-hover" margin="auto" >
      <Text
        className="about-H"
        fontSize={{ base: "xl", md: "2xl" }}
        fontWeight="extrabold"
      >
        Contact Me
      </Text>
    </Box>

    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={{ base: 5, md: 10 }}
    >
      <Box
        margin="auto"
        fontSize="large"
        fontWeight="500"
        display="grid"
        justifyContent="center"
        alignItems="center"
        // height="auto"
        // maxWidth={{ base: "90%", md: "400px" }}
        className="contact"
      >
        <Box
          as="b"
          fontSize="20px"
          display="flex"
          justifyContent="left"
          alignItems="center"
          gap="6px"
        >
          <FaHome />
          <Text as="b" >
            Mumbai,Maharashtra,India
          </Text>
        </Box>
        <a href="poojachavan8669@gmail.com">
          <Box
            id="contact-email"
            as="b"
            fontSize="20px"
            display="flex"
            justifyContent="left"
            alignItems="center"
            gap="6px"
          >
            {" "}
            <MdAttachEmail />
            <Text as="b">
              poojachavan8669@gmail.com
            </Text>
          </Box>
        </a>
        <Box
          id="contact-github"
          as="b"
          fontSize="20px"
          display="flex"
          justifyContent="left"
          alignItems="center"
          gap="6px"
        >
          <BsGithub />{" "}
          <a href="https://github.com/PoojaRathod5" target="_blank"
            rel="noreferrer">
            <Text as="b">
              Github
            </Text>
          </a>
        </Box>
        <Box
          id="contact-phone"
          as="b"
          fontSize="20px"
          display="flex"
          justifyContent="left"
          alignItems="center"
          gap="6px"
        >
          <BsFillTelephoneFill />{" "}
          <a href="tel:7057989633">
            <Text as="b">
              7057989633
            </Text>
          </a>
        </Box>
        <a
          href="https://www.linkedin.com/in/pooja-rathod-9a133323b/"
          target="_blank"
          rel="noreferrer"
        >
          <Box
            id="contact-linkedin"
            as="b"
            fontSize="20px"
            display="flex"
            justifyContent="left"
            alignItems="center"
            gap="6px">
                <ImLinkedin />
                <Text as="b" >
                  Pooja Rathod
                </Text>
              </Box>
            </a>
          </Box>
          <Box
            alignItems="center"
          >
            <Box className="contact-form" padding="10px" width={{ base: "100%", md: "400px" }} height="auto" >
              <FormControl action="https://formspree.io/f/xpzezbvk" method="POST">
                <Input type="email" name="phone" placeholder="E-MAIL" />
                <br></br>
                <br></br>
                <Input type="number" variant='outline' name="phone" placeholder="Phone Number" />
                <br></br>
                <br></br>
                <Input
                  type="message"
                  className="message"
                  placeholder="Please enter your messages..."
                ></Input>
                <br></br>
                <br></br>
                <Button type="submit" backgroundColor="teal" width="7rem">
                  <Box
                    gap="10px"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    w='100%'
                    backgroundColor="teal"
                    borderRadius="5px"
                  >
                    <Text as="b" padding="4px"> Send</Text>
                    <RiMailSendFill />
                  </Box>
                </Button>
              </FormControl>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Contact;