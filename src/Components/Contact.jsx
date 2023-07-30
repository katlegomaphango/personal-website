import styled from "@emotion/styled"
import { Box, Paper, Typography } from "@mui/material"
import { theme } from "../theme"
import { GitHub, LinkedIn, Mail, Phone } from "@mui/icons-material"

const MainBox = styled(Box)({
    background: theme.palette.primary.dark,
    width: '100%',
    paddingBottom: 100,
    paddingTop: 100,
    marginTop: 100
})

const Contact = () => {
    return (
        <>
            <MainBox>
                <Box sx={{maxWidth: '25rem', margin: '0 auto'}}>
                    <Paper elevation={24} sx={{padding: 4, background: theme.palette.primary.main}}>
                        <Typography variant="h5" sx={{marginBottom: 2}}>
                            Let's Connect
                        </Typography>
                        <hr style={{borderColor: theme.palette.primary.contrastText}} />
                        <Typography variant="h6" py={2}>
                            Katlego Maphango
                        </Typography>
                        <Box
                            sx={{display: 'flex', gap: 1}}
                            py={1}
                        >
                            <Phone />
                            +27 (68) 588 2974
                        </Box>
                        <Box
                            sx={{display: 'flex', gap: 1}}
                            py={1}
                        >
                            <Mail />
                            <a href="mailto:mphangokatlego08@gmail.com" style={{color: 'black'}}>mphangokatlego08@gmail.com</a>
                        </Box>
                        <Box sx={{paddingTop: 2, display: 'flex', gap: 2}}>
                            <a href="https://github.com/katlegomaphango"
                                target="_blank"
                                rel="noreferrer"
                                style={{color: theme.palette.primary.contrastText}}
                            >
                                <GitHub sx={{fontSize: '2.5rem'}} />
                            </a>
                            <a href="https://www.linkedin.com/in/katlego-maphango/"
                                rel="noreferrer"
                                target="_blank"
                                style={{color: theme.palette.primary.contrastText}}
                            >
                                <LinkedIn sx={{fontSize: '2.5rem'}} />
                            </a>
                        </Box>
                    </Paper>
                </Box>
            </MainBox>
        </>
    )
}

export default Contact