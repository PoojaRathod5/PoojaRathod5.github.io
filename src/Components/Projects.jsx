import { Badge, Box, Button, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai'


const Projects = () => {

  const projects = [
    {
      id: 1,

      name: "Netmeds Clone",
      description: "Clone of NetMeds.com . it has making healthcare accessible and affordable to all,",
      image: "https://i.ibb.co/hs2Pr4r/netmeds.png",
      techStack: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/PoojaRathod5/NetMeds-Clone",
      demo: "https://netmed-lokesh-alok-ashish-akash-pooja.netlify.app/"
    },
    {
      id: 2,

      name: "Infinity Jewellers",
      description: "This is the clone of caratlane website which has a data of different type jwellary products.",
      image: "https://i.ibb.co/J3HBznH/Cartlane.png",
      techStack: ["CSS", "React", "Redux-thunk", "Redux"],
      github: "https://github.com/PoojaRathod5/new-bucket-3441",
      demo: "https://celestial-bubble-1320-cjzn.vercel.app/"
    },

    {
      id: 3,

      name: "TimeCamp Clone",
      description: "TimeCamp is centralized automated system that makes it easy for teams to work on all aspects of their programs and projects to ensure efficiency and productivity.",
      image: "https://i.ibb.co/jgCFshg/Screenshot-528.png",
      techStack: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/MrVivek30/violet-support-6758",
      demo: "https://timecampp.netlify.app/"
    },

    {
      id: 4,

      name: "Paytmmall Clone",
      description: "Universal Mall - World's Leading Online Shopping Experience. Online shopping &convenient and trouble-free.",
      image: "https://i.ibb.co/Mf410yR/Screenshot-542.png",
      techStack: ["HTML", "CSS", "React"],
      github: "https://github.com/PoojaRathod5/assorted-dinner-745",
      demo: "https://universalmall.vercel.app/"
    },



  ]

  return (
    <>
      <Text id="projects" fontSize="4xl" fontWeight="600" margin="auto" textAlign="center" marginTop={{ base: "30px", md: "20px", lg: "60px" }}>Projects</Text>
      <Box
        //border="1px solid yellow"
        display="grid"
        width="90%"
        margin="auto"
        padding={{ base: "20px", md: "50px" }}
        gridTemplateColumns={{ base: "1fr", sm: "1fr 1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap="20px"
      >
        {
          projects.map((el) => {
            return <Box className="project-card" boxShadow='md' p='6' rounded='md' padding="20px" transition="transform 0.2s" _hover={{ transform: "scale(1.05)" }}>
              <Image src={el.image} />
              <Box className="project-tech-stack" marginTop="10px" display="flex" justifyContent="center" flexWrap="wrap">
                {
                  el.techStack.map((tech) => {
                    return <Badge borderRadius='full' px='2' colorScheme='teal' margin="5px">
                      {tech}
                    </Badge>
                  })
                }
              </Box>
              <Text className="project-title" marginTop="20px" fontSize={{ base: "2xl", md: "3xl" }}>{el.name}</Text>
              <Text className="project-description" marginTop="10px" fontSize={{ base: "sm", md: "md" }}>{el.description}</Text>
              <Box display="flex" justifyContent="space-between" marginTop="20px">
                <Link className="project-deployed-link" href={el.demo} isExternal >
                  <Button size={{ base: "sm", md: "md" }} fontSize={{ base: "sm", md: "md" }}>Demo<Text as="span" ml={"2"}>
                    <AiOutlineDownload fontSize={"1.2rem"} />
                  </Text>
                  </Button>
                </Link>
                <Link className="project-github-link" href={el.github} isExternal>
                  <Button size={{ base: "sm", md: "md" }} fontSize={{ base: "sm", md: "md" }}>Github<Text as="span" ml={"2"}>
                    <AiOutlineDownload fontSize={"1.2rem"} />
                  </Text>
                  </Button>
                </Link>
              </Box>
            </Box>
          })
        }
      </Box>
    </>
  )
}

export default Projects
