
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorMode,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
// import Sidebar from "./Sidebar";
import { AiOutlineDownload } from "react-icons/ai";
import { Helmet } from "react-helmet";
import Pooja_Rathod_Resume from "../assets/Pooja_Rathod_Resume.pdf"
import Sidebar from "./Sidebar";

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
      <Box id="nav-menu" pos={{ base: "sticky", md: "sticky", sm: "fixed" }} zIndex="7" textTransform={"capitalize"}
        top="0" left="0" right="0"
        background={colorMode === "light" ? "#b0bec5" : "black"}
      >

        <Flex
          justify={"space-between"}
          height="4rem"
          align={"center"}
          transition={"all 1s"}
        >
          <Box height="3.5rem" marginLeft={{ base: "2px", lg: "2rem" }}>
            <Link href="#">
              <Image
                src={
                  colorMode == "dark"
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
          >
            <Link

              onClick={() => setTitle("Home")}
              href="#home"
              className="nav-link home"
            >
              home
            </Link>
            <Link

              onClick={() => setTitle("About")}
              href="#about"
              className="nav-link about"
            >
              about
            </Link>
            <Link
              onClick={() => setTitle("Skills")}
              href="#skills"
              className="nav-link skills"
            >
              skills
            </Link>
            <Link
              onClick={() => setTitle("Projects")}
              href="#projects"
              className="nav-link projects"
            >
              projects
            </Link>
            <Link
              onClick={() => setTitle("Contact")}
              href="#contact"
              className="nav-link contact"
            >
              contact
            </Link>
            <Button
              width="max-content"
              colorScheme={"teal"}
              id="resume-button-1"
              className="nav-link resume"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/155bn9yvDFFnbO9vWU081QMqRp5lFe2Q3/view?usp=sharing",
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
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
          <Box display={{ lg: "none" }} marginRight="10px">
            <Sidebar />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
