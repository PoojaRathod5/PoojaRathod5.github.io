import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Skills = () => {
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
            name: "Node.js",
            image: "https://img.icons8.com/color/1x/nodejs.png",
          },
          {
            id: 8,
            name: "Express.js",
            image: "https://img.icons8.com/color/1x/css3.png",
          },
          {
            id: 9,
            name: "Javascript",
            image: "https://img.icons8.com/color/1x/javascript.png",
          },
          {
            id: 10,
            name: "React",
            image: "https://img.icons8.com/color/1x/react-native.png",
          },
          {
            id: 11,
            name: "Redux",
            image: "https://img.icons8.com/color/1x/redux.png",
          },
          {
            id: 12,
            name: "Firebase",
            image: "https://img.icons8.com/color/1x/firebase.png",
          },
          {
            id: 13,
            name: "Github",
            image: "https://img.icons8.com/windows/2x/github.png",
          },
          {
            id: 14,
            name: "Tailwindcss",
            image: "https://img.icons8.com/color/1x/tailwindcss.png",
          },
          {
            id: 14,
            name: "Tailwindcss",
            image: "https://img.icons8.com/color/1x/tailwindcss.png",
          }
    ]
  return (
    <>
    <Text fontSize="4xl" fontWeight="600"  margin="auto" textAlign="center" >Tech Stacks</Text>
    <Box id='skills' height="70vh" border="1px solid gray" width="80%" margin="auto">

        <Box display="grid" gridTemplateColumns="repeat(7,1fr)">
            {
                Skills.map((el)=>{
                    return <Box key={el.id} className="skills-card" >
                      <Image className="skills-card-img" src={el.image}/>
                      <Text className="skills-card-name">{el.name}</Text>
                    </Box>
                })
            }
        </Box>

    </Box>
    </>
  )
}

export default Skills