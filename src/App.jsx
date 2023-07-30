import { Box } from '@mui/material'
import './App.css'
import styled from '@emotion/styled'
import {theme} from './theme'
import { About, Contact, Footer, Hero, Projects, Toolbox } from './Components'


const MainContainer = styled(Box)({
  background: theme.palette.primary.main,
  width: '100%'
})

function App() {

  return (
    <>
      <MainContainer>
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
