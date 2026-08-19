import { Header } from "./components/Header/header"
import { Main } from "./components/Main/main"
import { SectionCards } from "./components/SectionCards/sectionCards"
import { SectionAcessories } from "./components/SectionAcessories/sectionAcessories"
import { Contact } from "./components/contact/contact"
import { Footer } from "./components/footer/footer"
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
