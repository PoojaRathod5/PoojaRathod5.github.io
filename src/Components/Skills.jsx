import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./skills.module.css";

const Skills = () => {
  var settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 2000,
    arrows: false,
    rtl: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll6: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var settings1 = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Skills = [
    {
      id: 1,
      name: "HTML",
      image: "https://img.icons8.com/color/1x/html-5.png",
    },
    {
      id: 2,
      name: "CSS",
      image: "https://img.icons8.com/color/1x/css3.png",
    },
    {
      id: 3,
      name: "Javascript",
      image: "https://img.icons8.com/color/1x/javascript.png",
    },
    {
      id: 4,
      name: "React",
      image: "https://img.icons8.com/color/1x/react-native.png",
    },
    {
      id: 5,
      name: "Redux",
      image: "https://img.icons8.com/color/1x/redux.png",
    },
    {
      id: 6,
      name: "Chakra UI",
      image: "https://img.icons8.com/color/1x/chakra-ui.png",
    },
    {
      id: 7,
      name: "TypeScript",
      image: "https://img.icons8.com/color/256/typescript.png",
    },
    {
      id: 8,
      name: "tailwind",
      image: "https://img.icons8.com/color/256/tailwindcss.png",
    },
    {
      id: 9,
      name: "Github",
      image: "https://img.icons8.com/bubbles/256/github.png",
    },
  ];

  const backEndSkills = [
    {
      id: 1,
      name: "Node.js",
      image: "https://img.icons8.com/color/1x/nodejs.png",
    },
    {
      id: 2,
      name: "Express.js",
      image: "https://img.icons8.com/office/256/express-js.png",
    },
    {
      id: 3,
      name: "Firebase",
      image: "https://img.icons8.com/color/256/firebase.png",
    },
    {
      id: 4,
      name: "Netlify",
      image:
        "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/256/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
    },
    {
      id: 5,
      name: "Mongoose",
      image: "https://img.icons8.com/color/256/mongoose.png",
    },
    {
      id: 6,
      name: "Git",
      image: "https://img.icons8.com/color/256/git.png",
    },

    {
      id: 7,
      name: "MongoDB",
      image:
        "https://cdn.iconscout.com/icon/free/png-512/mongodb-3-1175138.png?f=avif&w=256",
    },
    {
      id: 8,
      name: "npm",
      image: "https://img.icons8.com/color/256/npm.png",
    },
    {
      id: 9,
      name: "Vercel",
      image: "https://cdn.worldvectorlogo.com/logos/vercel.svg",
    },
  ];
  return (
    <>
      <Text
        fontSize="4xl"
        fontWeight="600"
        margin="auto"
        textAlign="center"
        marginTop={{ base: "30px", md: "20px", lg: "50px" }}
      >
        Tech Stacks
      </Text>
      <Box id="skills" height={["45vh", "40vh", "60vh"]}>
        <Box className="mainContainer" marginTop={"20px"}>
          <Slider {...settings}>
            {Skills.map((el) => {
              return (
                <Box
                  key={el.id}
                  alignItems={"center"}
                  textAlign={"center"}
                  padding={{ base: "10px", md: "20px", lg: "40px" }}
                  height="auto"
                >
                  <Image className={styles.skillscardimg} src={el.image} />
                  <Text className="skills-card-name">{el.name}</Text>
                </Box>
              );
            })}
          </Slider>
        </Box>

        <Box className="mainContainer" marginTop={"10px"}>
          <Slider {...settings1}>
            {backEndSkills.map((el) => {
              return (
                <Box
                  key={el.id}
                  alignItems={"center"}
                  textAlign={"center"}
                  padding={{ base: "10px", md: "20px", lg: "40px" }}
                  height="auto"
                >
                  <Image className="skills-card-img" src={el.image} />
                  <Text className="skills-card-name">{el.name}</Text>
                </Box>
              );
            })}
          </Slider>
        </Box>
      </Box>
    </>
  );
};

export default Skills;