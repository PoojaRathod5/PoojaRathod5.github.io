import { Badge, Box, Button, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai'

const Projects = () => {

  const projects = [
    {
      id: 1,

      name: "Netmeds website (Clone)",
      description: "It is my first project",
      image: "https://i.ibb.co/hs2Pr4r/netmeds.png",
      techStack: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/PoojaRathod5/NetMeds-Clone",
      demo: "https://netmed-lokesh-alok-ashish-akash-pooja.netlify.app/"
    },
    {
      id: 1,

      name: "Infinity Jewellers website (Clone)",
      description: "It is my react project",
      image: "https://i.ibb.co/J3HBznH/Cartlane.png",
      techStack: ["CSS", "React", "Redux-thunk", "Redux"],
      github: "https://github.com/PoojaRathod5/new-bucket-3441",
      demo: "https://celestial-bubble-1320-cjzn.vercel.app/"
    },
    {
      id: 1,

      name: "Farfetch Website (Clone)",
      description: "It is my Second project",
      image: "https://i.ibb.co/8MMLNdW/Farfetch.png",
      techStack: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/PoojaRathod5/animated-governor-4742",
      demo: "https://tubular-semifreddo-2ed46b.netlify.app/"
    },
    {
      id: 1,

      name: "TimeCamp website (Clone)",
      description: "It is my javasript project",
      image: "https://i.ibb.co/jgCFshg/Screenshot-528.png",
      techStack: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/MrVivek30/violet-support-6758",
      demo: "https://timecampp.netlify.app/"
    },



  ]

  return (
    <>
      <Text id="projects" fontSize="4xl" fontWeight="600" margin="auto" textAlign="center" >Projects</Text>
      <Box height="120vh"
        //border="1px solid yellow"
        display="grid"
        width="80%"
        gridTemplateColumns="repeat(3,1fr)"
        gap="20px"
        margin="auto"
      >
        {
          projects.map((el) => {
            return <Box className="project-card" border="1px solid black">
              <Image src={el.image} />
              <Box className="project-tech-stack">
                {
                  el.techStack.map((tech) => {
                    return <Badge borderRadius='full' px='2' colorScheme='teal'>
                      {tech}
                    </Badge>
                  })
                }
              </Box>
              <Text className="project-title">{el.name}</Text>
              <Text className="project-description">{el.description}</Text>
              <Link className="project-deployed-link" href={el.demo} isExternal >
                <Button>Demo<Text as="span" ml={"2"}>
                  <AiOutlineDownload fontSize={"1.2rem"} />
                </Text>
                </Button>
              </Link>
              <Link className="project-github-link" href={el.github} isExternal>
                <Button>Github<Text as="span" ml={"2"}>
                  <AiOutlineDownload fontSize={"1.2rem"} />
                </Text>
                </Button>
              </Link>
            </Box>
          })
        }
      </Box>
    </>
  )
}

export default Projects
