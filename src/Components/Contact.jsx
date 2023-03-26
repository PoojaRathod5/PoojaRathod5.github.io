import React from "react";
import { BsFillTelephoneFill, BsGithub } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { Box, Flex, SimpleGrid, Text, } from "@chakra-ui/react";
import { RiMailSendFill } from "react-icons/ri";
import { Input, InputGroup, InputLeftElement, } from '@chakra-ui/react'
import {
  FormControl,
  PhoneIcon
} from '@chakra-ui/react'

const Contact = () => {
  return (
    <Box id="contact" marginTop={{ base: "30px", md: "20px", lg: "60px" }} mb={"20px"}>
      <Box
        padding="30px"
        height="450px"
        mb={["150px", "160px", "0px", "0px", "0px"]}

      >
        <Box w="max-content" align="center" className="heading-hover" margin={'auto'} mb='20px'>
          <Text
            className="about-H"
            fontSize={["2xl", "2xl", "3xl", "4xl"]}
            as="b"
            fontWeight='extrabold'
          >
            Contact Me
          </Text>

        </Box>

        <SimpleGrid
          //  border="1px solid red"
          //  spacing={5}
          // columns={{ sm: 1, md: 2, lg: 2}}
          className="form"
          columns={2} spacing={10}

        >
          <Box
            // border="1px solid green" 
            margin="auto"
            fontSize="large"
            fontWeight="600"
            display="grid"
            justifyContent="center"
            alignItems="center"
            height="250px"
            w="400px"
            className="contact"
            marginEnd="-0.5"
          >
            <Box
              as="b"
              fontSize="25px"
              display="flex"
              justifyContent="left"
              alignItems="center"
              gap="6px"
            >
              <FaHome />
              <Text as="b" fontSize={["sm", "lg", "xl", "xl"]}>
                Mumbai,Maharashtra,India
              </Text>
            </Box>
            <a href="poojachavan8669@gmail.com">
              <Box
                id="contact-email"
                as="b"
                fontSize="25px"
                display="flex"
                justifyContent="left"
                alignItems="center"
                gap="6px"
              >
                {" "}
                <MdAttachEmail />
                <Text as="b" fontSize={["sm", "lg", "xl", "xl"]}>
                  poojachavan8669@gmail.com
                </Text>
              </Box>
            </a>
            <Box
              id="contact-github"
              as="b"
              fontSize="25px"
              display="flex"
              justifyContent="left"
              alignItems="center"
              gap="6px"
            >
              <BsGithub />{" "}
              <a href="https://github.com/PoojaRathod5" target="_blank"
                rel="noreferrer">
                <Text as="b" fontSize={["sm", "lg", "xl", "xl"]}>
                  Github
                </Text>
              </a>
            </Box>
            <Box
              id="contact-phone"
              as="b"
              fontSize="25px"
              display="flex"
              justifyContent="left"
              alignItems="center"
              gap="6px"
            >
              <BsFillTelephoneFill />{" "}
              <a href="tel:7057989633">
                <Text as="b" fontSize={["sm", "lg", "xl", "xl"]}>
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
                fontSize="25px"
                display="flex"
                justifyContent="left"
                alignItems="center"
                gap="6px"
              >
                <ImLinkedin />
                <Text as="b" fontSize={["sm", "lg", "xl", "xl"]}>
                  Pooja Rathod
                </Text>
              </Box>
            </a>
          </Box>
          <Box
            alignItems="center"
          >
            <Box className="contact-form" w="400px" padding="10px" h="200px" >
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
                <button type="submit">
                  <Box
                    gap="10px"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    align='left'
                    w='100%'
                    marginLeft="5px"
                    backgroundColor="teal"
                    borderRadius="5px"
                  >

                    <Text as="b" padding="4px"> Send</Text>
                    <RiMailSendFill />
                  </Box>

                </button>
              </FormControl>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Contact;