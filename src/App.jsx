import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import PrintIcon from '@mui/icons-material/Print';
import './App.css'
import styled from '@emotion/styled'
import {theme} from './theme'
import { About, Contact, Footer, Hero, Projects, Toolbox } from './Components'
import resume from '../public/resume.pdf'


const MainContainer = styled(Box)({
  background: theme.palette.primary.main,
  width: '100%'
})

const speedStyle = {
  position: 'absolute', 
  bottom: 20, 
  right: {
    xs: 20,
    sm: 20,
    md: 100,
    lg: 320
  }, 
  color: theme.palette.primary.dark}

function App() {

  return (
    <>
      <MainContainer>
        <div>
          <SpeedDial
            ariaLabel='speed dial'
            sx={speedStyle}
            icon={<SpeedDialIcon />}
          >
            <SpeedDialAction
              icon={<PrintIcon />}
              tooltipTitle={"Resume"}
              tooltipOpen
              onClick={() => window.open(resume)}
            />
          </SpeedDial>
        </div>
        <Hero />
        <About />
        <Toolbox />
        <Projects />
        <Contact />
        <Footer />
      </MainContainer>
    </>
  )
}

export default App
