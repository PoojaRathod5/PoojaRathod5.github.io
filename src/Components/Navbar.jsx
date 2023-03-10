import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorMode,
  Link
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
// import Sidebar from "./Sidebar";
import { AiOutlineDownload } from "react-icons/ai";
import { Helmet } from "react-helmet";
import Pooja_Rathod_Resume from "../assets/Pooja_Rathod_Resume.pdf"
import Logo1 from "../assets/Logo_for_white_bg.png";
import Logo2 from "../assets/Logo_for_black_bg.png";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [title, setTitle] = useState("Home");

  return (
    <>
      <div>
        <Helmet>
          <title>{`Pooja Rathod | ${title}`}</title>
        </Helmet>
      </div>
      <Box id="nav-menu" pos={"sticky"} top="0" textTransform={"capitalize"} background="#b0bec5"   >
        <Flex
          justify={"space-between"}
          height="4rem"
          align={"center"}
          transition={"all 1s"}
        >

          <Box height="3.5rem" marginLeft={{ base: "10px", lg: "5rem" }} >
            <Link href="#">
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
            <Link onClick={() => setTitle("Home")} href="#home" className="nav-link home">
              home
            </Link>
            <Link onClick={() => setTitle("About")} href="#about" className="nav-link about" >
              about
            </Link>
            <Link onClick={() => setTitle("Skills")} href="#skills" className="nav-link skills"
            >
              skills
            </Link>
            <Link onClick={() => setTitle("Projects")} href="#projects" className="nav-link projects">
              projects
            </Link>
            <Link onClick={() => setTitle("Contact")} href="#contact" className="nav-link contact">
              contact
            </Link>
            <a id="resume-link-1" target="_blank" href={Pooja_Rathod_Resume} download>
            <Button
              className="nav-link resume"
              colorScheme={"teal"}
              id="resume-button-1"
            >
              Resume
              <Text as="span" ml={"2"}>
                <AiOutlineDownload fontSize={"1.2rem"} />
              </Text>
            </Button>
            </a>
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