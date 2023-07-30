import styled from "@emotion/styled"
import { Box, Typography } from "@mui/material"
import { theme } from "../theme"


const MainBox = styled(Box)({
    background: theme.palette.primary.light,
    width: '100%',
    padding: 20,
    borderTop: `1px solid ${theme.palette.primary.contrastText}`,
    marginTop: 100
})

const Footer = () => {
    return (
        <>
            <MainBox>
                <Typography sx={{textAlign: 'center'}}>
                    Katlego Maphango &copy; 2023
                </Typography>
            </MainBox>
        </>
    )
}

export default Footer