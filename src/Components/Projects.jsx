import { Badge, Box, Button, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai'

const Projects = () => {

    const projects = [
        {
            id:1,
            name:"CartLane Clone",
            description:"",
            image:"",
            techStack:["HTML","CSS","Javascript"],
            github:"https://github.com/MrVivek30/violet-support-6758",
            demo:"https://relaxed-douhua-b76152.netlify.app/"
        },
        
    ]

  return (
    <>
        <Text id="projects" fontSize="4xl" fontWeight="600"  margin="auto" textAlign="center" >Projects</Text>
     <Box height="120vh" 
     border="1px solid yellow" 
     display="grid" 
     gridTemplateColumns="repeat(3,1fr)"
     gap="20px"
     >
        {
            projects.map((el)=>{
                return <Box className="project-card" border="1px solid black">
                    <Image src={el.image}/>
                    <Box className="project-tech-stack">
                      {
                        el.techStack.map((tech)=>{
                            return<Badge borderRadius='full' px='2' colorScheme='teal'>
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
