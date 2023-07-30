import styled from "@emotion/styled"
import { Box, Container, Typography } from "@mui/material"
import { theme } from "../theme"

const MainBox = styled(Box)({
    background: theme.palette.primary.dark,
    width: '100%',
    paddingBottom: 40,
})

const StyledTitle = styled(Typography)({
    paddingTop: 40,
    paddingBottom: 40,
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '500'
})

const CardBox = styled(Box)({
    width: '5rem',
})

const ListContainer = styled(Container)({
    display: 'grid', 
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '1rem',
    placeItems: 'center',
})

const Toolbox = () => {
    return (
        <>
        <MainBox>
            <StyledTitle variant="h3">ToolBox</StyledTitle>
            <ListContainer maxWidth="md">
                <CardBox>
                    <Box>
                        <img src="/assets/logos/javascript.svg" style={{width: '100%', height: '5rem'}} />
                    </Box>
                    <Typography sx={{textAlign: 'center'}}>JavaScript</Typography>
                </CardBox>
                <CardBox>
                    <Box>
                        <img src="/assets/logos/cshap.svg" style={{width: '100%', height: '5rem'}} />
                    </Box>
                    <Typography sx={{textAlign: 'center'}}>C-Sharp</Typography>
                </CardBox>
                <CardBox>
                    <Box>
                        <img src="/assets/logos/react.svg" style={{width: '100%', height: '5rem'}} />
                    </Box>
                    <Typography sx={{textAlign: 'center'}}>React</Typography>
                </CardBox>
                <CardBox>
                    <Box>
                        <img src="/assets/logos/redux.svg" style={{width: '100%', height: '5rem'}} />
                    </Box>
                    <Typography sx={{textAlign: 'center'}}>Redux</Typography>
                </CardBox>
                <CardBox>
                    <Box>
                        <img src="/assets/logos/dotnet.svg" style={{width: '100%', height: '5rem'}} />
                    </Box>
                    <Typography sx={{textAlign: 'center'}}>dot net</Typography>
                </CardBox>
                <CardBox>
                    <Box>
                        <img src="/assets/logos/html.svg" style={{width: '100%', height: '5rem'}} />
                    </Box>
                    <Typography sx={{textAlign: 'center'}}>HTML</Typography>
                </CardBox>
                <CardBox>
                    <Box>
                        <img src="/assets/logos/css.svg" style={{width: '100%', height: '5rem'}} />
                    </Box>
                    <Typography sx={{textAlign: 'center'}}>CSS</Typography>
                </CardBox>
                <CardBox>
                    <Box>
                        <img src="/assets/logos/github.svg" style={{width: '100%', height: '5rem'}} />
                    </Box>
                    <Typography sx={{textAlign: 'center'}}>GitHub</Typography>
                </CardBox>
                <CardBox>
                    <Box>
                        <img src="/assets/logos/material-ui.svg" style={{width: '100%', height: '5rem'}} />
                    </Box>
                    <Typography sx={{textAlign: 'center'}}>Material UI</Typography>
                </CardBox>
                <CardBox>
                    <Box>
                        <img src="/assets/logos/figma.svg" style={{width: '100%', height: '5rem'}} />
                    </Box>
                    <Typography sx={{textAlign: 'center'}}>Figma</Typography>
                </CardBox>
            </ListContainer>
        </MainBox>
        </>
    )
}

export default Toolbox