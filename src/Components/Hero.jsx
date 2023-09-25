import styled from "@emotion/styled"
import { Box, Typography } from "@mui/material"
import {theme} from '../theme'

const MainBox = styled(Box)({
    height: '100vh',
    width: '100%',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '2rem',
})

const StyledTitle = styled(Typography)({
    fontWeight: '500',
    fontSize: '3rem',
    color: theme.palette.primary.contrastText
})

const StyledSubTitle = styled(Typography)({
    fontWeight: '400',
    fontSize: '2rem',
    textAlign: 'center',
})

const BoxImage = styled(Box)({
    width: 300,
    boxShadow: '0px 0px 5px #000',
    marginTop: '3rem'
})

const Hero = () => {
    return(
        <>
        <MainBox>
            <StyledTitle variant="h1">
                Hi, I'm Katlego.
            </StyledTitle>
            <StyledSubTitle variant="h3">
                I'm a Software Developer based in Pretoria.
            </StyledSubTitle>
            <BoxImage>
                <img style={{width: '100%', height: '100%'}} src="/hero.JPG" />
            </BoxImage>
        </MainBox>
        </>
    )
}

export default Hero