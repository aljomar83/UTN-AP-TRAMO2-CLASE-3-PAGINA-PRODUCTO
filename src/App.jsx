import './App.css'
// import { CardP } from './Components/CardP/CardP'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { Footer } from './Components/Footer/Footer'
import { ChakraProvider } from '@chakra-ui/react'

const App=()=> {
  


  return (
    <ChakraProvider>
      <Header/>
      <Main/>
      <Footer/>
    </ChakraProvider>
    
    
  )
}

export default App
