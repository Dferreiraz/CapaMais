import { Header } from "./components/Header/header"
import { Main } from "./components/Main/main"
import { SectionCards } from "./components/SectionCards/sectionCards"
import { SectionAcessories } from "./components/sectionAcessories/sectionAcessories"
import { Contact } from "./components/Contact/Contact"
import { Footer } from "./components/Footer/Footer"
import './App.css'



function App() {

  return (
    <>
      <Header/>
      <Main/>
      <SectionCards/>
      <SectionAcessories/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
