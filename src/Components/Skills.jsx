import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Element } from "react-scroll";

const Skills = () => {
  var settings = {
    infinite: true,
    slidesToShow: 7,
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
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
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
    slidesToShow: 7,
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
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
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
      image: "https://img.icons8.com/color/256/html-5.png",
    },
    {
      id: 2,
      name: "CSS",
      image: "https://img.icons8.com/color/256/css3.png",
    },
    {
      id: 3,
      name: "Javascript",
      image: "https://img.icons8.com/color/256/javascript.png",
    },
    {
      id: 4,
      name: "React",
      image: "https://img.icons8.com/color/256/react-native.png",
    },
    {
      id: 5,
      name: "Redux",
      image: "https://img.icons8.com/color/256/redux.png",
    },
    {
      id: 6,
      name: "Chakra UI",
      image: "https://img.icons8.com/color/256/chakra-ui.png",
    },
    {
      id: 7,
      name: "TypeScript",
      image: "https://img.icons8.com/color/256/typescript.png",
    },
    {
      id: 8,
      name: "Github",
      image: "https://img.icons8.com/bubbles/256/github.png",
    },
  ];

  const backEndSkills = [
    {
      id: 1,
      name: "Node.js",
      image: "https://img.icons8.com/color/256/nodejs.png",
    },
    {
      id: 2,
      name: "Express.js",
      image: "https://img.icons8.com/office/256/express-js.png",
    },
    {
      id: 3,
      name: "Netlify",
      image:
        "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/256/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
    },
    {
      id: 4,
      name: "Mongoose",
      image: "https://img.icons8.com/color/256/mongoose.png",
    },
    {
      id: 5,
      name: "Git",
      image: "https://img.icons8.com/color/256/git.png",
    },

    {
      id: 6,
      name: "MongoDB",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZRwT3TUV4nSOVLN43q1Zc6H4vBE8JC4XhB_5E8rXs2n8sRY2G0ZieHbCY3c98UegSII&usqp=CAU",
    },
    {
      id: 7,
      name: "npm",
      image: "https://img.icons8.com/color/256/npm.png",
    },
    {
      id: 8,
      name: "Vercel",
      image: "https://cdn.worldvectorlogo.com/logos/vercel.svg",
    },
  ];
  return (
    <Box marginTop="5rem" 
    >
    
      <Element name="skills" className="element">
        <Text
          fontSize="4xl"
          fontWeight="600"
          margin="auto"
          textAlign="center"
          marginTop={{ base: "50px", md: "20px", lg: "80px" }}
        >
          Tech Stacks
        </Text>
        <Box id="skills" minHeight={["45vh", "40vh", "80vh"]} >
          <Box className="mainContainer" marginTop={{ base: "30px", md: "40px", lg: "50px" }}>
            <Slider {...settings}>
              {Skills.map((el) => {
                return (
                  <Box
                    key={el.id}
                    alignItems={"center"}
                    textAlign={"center"}
                    padding={{ base: "10px", md: "20px", lg: "40px" }}
                    height="auto"
                    w="100%"
                    className="skills-card"
                  >
                    <Image className="skills-card-img" src={el.image} />
                    <Text className="skills-card-name">{el.name}</Text>
                  </Box>
                );
              })}
            </Slider>
          </Box>

          <Box className="mainContainer" marginTop={{ base: "30px", md: "20px", lg: "50px" }}>
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
      </Element>
    </Box>
  );
};

export default Skills;