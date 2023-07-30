import styled from "@emotion/styled"
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material"
import { theme } from "../theme"




// eslint-disable-next-line react/prop-types
const ProjectCard = ({ imageStr, name, description, githubLink, liveLink}) => {
    return (
        <Card sx={{ maxWidth: 345, minWidth: 345, background: theme.palette.primary.dark, height: 350 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={imageStr}
                />
                <CardContent sx={{height: 160}}>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: 'white'}}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{color: 'white', overflow: 'hidden'}}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="outlined" size="small" href={githubLink} target="_blank" style={{color: theme.palette.primary.contrastText, borderColor: theme.palette.primary.contrastText}}>
                    Source Code
                </Button>
                <Button variant="outlined" size="small" href={liveLink} target="_blank" style={{color: theme.palette.primary.contrastText, borderColor: theme.palette.primary.contrastText}}>
                    Live Demo
                </Button>
            </CardActions>
        </Card>
    )
}

const StyledTitle = styled(Typography)({
    paddingTop: 40,
    paddingBottom: 40,
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '500'
})

const Projects = () => {
    const kitchenDescription = 'A web App that tracks customer orders from when they are taken until they are served to the customer. It also records the table number and the exact time that the order was created.'

    const bookConnectDesc = 'A web App that shows a list of Books, when a book is clicked a summary of the book is shown. The user can filter the books by the title, genre and/or author and the user can toggle between dark and light modes.'

    const podDescription = 'A podcast Web Application that a user can login and view available shows, user can filter and sort shows and also like favourites and they are stored to supabase so they can be shared across devices.'

    return (
        <>
        <Container maxWidth="md">
            <StyledTitle variant="h3">Recent Projects</StyledTitle>
            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center', alignItems: 'center'}}>
                <ProjectCard 
                    imageStr={'/assets/projects/resturant.png'} 
                    name={'Kitchen Express'}
                    description={kitchenDescription}
                    githubLink={'https://github.com/katlegomaphango/IWA-18'}
                    liveLink={'https://kat-kitchen-express.netlify.app'}
                />
                <ProjectCard
                    imageStr={'/assets/projects/book-connect.png'}
                    name={'Book Connect'}
                    description={bookConnectDesc}
                    githubLink={'https://github.com/katlegomaphango/KATMAP076_FTO2301_GroupB_KatlegoMaphango_ITW19'}
                    liveLink={'https://kat-book-connect.netlify.app'}
                />
                <ProjectCard
                    imageStr={'/assets/projects/podcast.png'}
                    name={"Plug 'n Play Podcast"}
                    description={podDescription}
                    githubLink={'https://github.com/katlegomaphango/KATMAP076_FTO2301_GroupB_KatlegoMaphango_DWACapstone'}
                    liveLink={'https://plug-n-play-pod.netlify.app'}
                />
            </Box>
        </Container>
        </>
    )
}

export default Projects