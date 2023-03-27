import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorMode
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
// import Sidebar from "./Sidebar";
import { AiOutlineDownload } from "react-icons/ai";
import { Helmet } from "react-helmet";
import Pooja_Rathod_Resume from "../assets/Pooja_Rathod_Resume.pdf"
import { useScrollPosition } from "react-use-scroll-position";
import myImage from "../assets/profile.jpg"

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [title, setTitle] = useState("Home");


  return (
    <>
      <div>
        <Helmet>
          <meta property="og:image" content="https://i.ibb.co/fpc2Vts/2023-02-19-15-21-29-627.jpg"></meta>
          <title>{`Pooja Rathod | ${title}`}</title>
        </Helmet>
      </div>
      <Box id="nav-menu" zIndex="9999" pos={"fixed"} top="0" left="0" right="0" textTransform={"capitalize"} background="#b0bec5"   >
        <Flex
          justify={"space-between"}
          height="4rem"
          align={"center"}
          transition={"all 1s"}
        >

          <Box height="3.5rem" marginLeft={{ base: "10px", lg: "5rem" }} >
            <Link to="home"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setTitle("Home")}
              //className="nav-link home"
            >
              <Image
                src={
                  colorMode === "dark"
                    ? "https://i.ibb.co/XZLmHyk/pooja-rathod-low-resolution-logo-white-on-transparent-background.png"
                    : "https://i.ibb.co/bsYggtw/pooja-rathod-low-resolution-logo-black-on-transparent-background.png"

                }
                height={"3.5rem"}
              />
            </Link>
          </Box>

          <Flex
            display={{ base: "none", lg: "flex" }}
            width={"50%"}
            justify="space-around"
            align={"center"}
            marginRight="2rem"
          //border="1px solid red"
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setTitle("Home")}
              activeClass="active"
              className="nav-link home"
            // onClick={() => setTitle("Home")} href="#home" className="nav-link home"
            >
              home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setTitle("About")}
              activeClass="active"
              className="nav-link about"
            //onClick={() => setTitle("About")} href="#about" className="nav-link about" 
            >
              about
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setTitle("Skills")}
              activeClass="active"
              className="nav-link skills"
            //onClick={() => setTitle("Skills")} href="#skills" className="nav-link skills"
            >
              skills
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setTitle("Projects")}
              activeClass="active"
              className="nav-link projects"
            //onClick={() => setTitle("Projects")} href="#projects" className="nav-link projects"
            >
              projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setTitle("Contact")}
              activeClass="active"
              className="nav-link contact"
            //onClick={() => setTitle("Contact")} href="#contact" className="nav-link contact"
            >
              contact
            </Link>
            <Button
              width="max-content"
              colorScheme={"teal"}
              id="resume-button-1"
              //className="nav-link resume"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1rOjZru0azTqSzZTzFyWgie_jkw-hRkGz/view?usp=sharing",
                  "_blank"
                );
                const link = document.createElement("a");
                link.setAttribute("id", "resume-link-1");
                link.href = Pooja_Rathod_Resume;
                link.download = "Pooja_Rathod_Resume.pdf";
                link.click();
              }}
            >
              {/* <a
                id="resume-link-1"
                href={Pooja_Rathod_Resume}
                target="_blank"
                download="Pooja_Rathod_Resume.pdf"
              > */}
              Resume
              {/* </a> */}
              <Text as="span" ml={"2"}>
                <AiOutlineDownload fontSize={"1.2rem"} />
              </Text>
            </Button>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
          {/* <Box display={{ lg: "none" }} marginRight="2rem">
            <Sidebar />
          </Box> */}
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;