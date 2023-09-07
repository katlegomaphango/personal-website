import { AddCircle } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from "@mui/material"
import { useState } from "react"
import { theme } from "../theme"


const About = () => {
    const [expand, setExpand] = useState(false)

    const handleChange = (panel) => (_event, isExpanded) => {
        setExpand(isExpanded ? panel : false)
    }

    return (
        <Container maxWidth="md" sx={{mb: 15, mt: 15}}>
            <Accordion 
                expanded={expand === 'panel1'} 
                onChange={handleChange('panel1')}
                sx={{background: theme.palette.primary.dark, color: 'white'}}
            >
                <AccordionSummary 
                    expandIcon={<AddCircle sx={{color: theme.palette.primary.contrastText}} />}
                    
                >
                    <Typography sx={{ width: '40%', flexShrink: 0 }}>
                        Tech Enthusiast & Problem Solver
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{background: theme.palette.primary.main, border: `1px solid ${theme.palette.primary.light}`, borderTopWidth: 0}}
                >
                    <Typography>
                        Hi there! I'm Katlego, a passionate Junior Developer with a love for turning ideas into reality through code. I have completed a Software Development course at CodeSpace Academy, I'm on a quest to explore the endless possibilities that technology offers. <br /> <br />
                        I always had interest in the world of computers and gadgets. As I dived deeper into the realm of programming, I discovered my passion for problem-solving and creating innovative solutions. I have honed my skills in 2 programming languages, including C#, and JavaScript. Additionally, I have experience with web development frameworks like React and backend technologies like ASP.NET.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion 
                expanded={expand === 'panel2'} 
                onChange={handleChange('panel2')}
                sx={{background: theme.palette.primary.dark, color: 'white', marginTop: 2}}
            >
                <AccordionSummary 
                    expandIcon={<AddCircle sx={{color: theme.palette.primary.contrastText}} />}
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Projects that Inspire
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{background: theme.palette.primary.main, border: `1px solid ${theme.palette.primary.light}`, borderTopWidth: 0}}
                >
                    <Typography>
                        Throughout my academic journey, I've had the privilege of working on exciting projects that have pushed the boundaries of my knowledge. One such project was building a book collection web app for book enthusiasts, so that users can discover new book to read and also determine how easy it is to get a second-hand copy of a book.
                        Another project involved developing a podcast web app given podcast API. These experiences have not only enhanced my technical abilities but also ignited my desire to make a positive impact through technology.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion 
                expanded={expand === 'panel3'} 
                onChange={handleChange('panel3')}
                sx={{background: theme.palette.primary.dark, color: 'white', marginTop: 2}}
            >
                <AccordionSummary 
                    expandIcon={<AddCircle sx={{color: theme.palette.primary.contrastText}} />}
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Ability to adapt and Learn
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{background: theme.palette.primary.main, border: `1px solid ${theme.palette.primary.light}`, borderTopWidth: 0}}
                >
                    <Typography>
                        The world of technology is constantly evolving, and I'm committed to continuous learning. I've faced challenges and setbacks along the way, but they have taught me valuable lessons. Each obstacle has only fueled my determination to become a better developer and contribute meaningfully to the tech community.
                        When I'm not coding, you'll often find me exploring the outdoors, hiking through scenic trails, or playing sports. I believe that a balanced life fuels creativity and enhances problem-solving abilities.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion 
                expanded={expand === 'panel4'} 
                onChange={handleChange('panel4')}
                sx={{background: theme.palette.primary.dark, color: 'white', marginTop: 2}}
            >
                <AccordionSummary 
                    expandIcon={<AddCircle sx={{color: theme.palette.primary.contrastText}} />}
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Future Aspirations
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{background: theme.palette.primary.main, border: `1px solid ${theme.palette.primary.light}`, borderTopWidth: 0}}
                >
                    <Typography>
                        In the future, I hope to combine my technical skills with my passion for social impact by working on projects that address real-world challenges. Whether it's developing accessible technology for people with disabilities or creating educational platforms for underserved communities, I am dedicated to using technology as a force for good.
                        <Typography sx={{m: 1, fontWeight: 'bolder'}}>Let's Connect</Typography>
                        I'm always excited to collaborate with fellow developers, learn from diverse perspectives, and take on new challenges. If you have any project ideas, opportunities, or just want to say hello, feel free to drop me an email at <a href="mailto:mphangokatlego08@gmail.com" style={{color: theme.palette.primary.contrastText}}>mphangokatlego08@gmail.com</a>. Let's build something great together!
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    )
}

export default About