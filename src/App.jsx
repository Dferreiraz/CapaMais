import { Header } from "./components/header/header"
import { Main } from "./components/main/main"
import { SectionCards } from "./components/sectionCards/sectionCards"
import { SectionAcessories } from "./components/sectionAcessories/sectionAcessories"
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
