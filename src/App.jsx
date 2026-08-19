import { Header } from "./components/header/header.jsx"
import { Main } from "./components/main/main.jsx"
import { SectionCards } from "./components/sectionCards/sectionCards.jsx"
import { SectionAcessories } from "./components/sectionAcessories/sectionAcessories.jsx"
import { Contact } from "./components/contact/contact.jsx"
import { Footer } from "./components/footer/footer.jsx"
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
