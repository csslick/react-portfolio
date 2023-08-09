import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";
import Works from "../components/Works";
import Contact from "../components/Contact";

export default function Home() {

  return (
    <div>
      <Header/>
      <Main>
        <Intro/>
        <About/>
        <Skills/>
        <Works/>
        <Contact/>
      </Main>
      <Footer/>
    </div>
  )
}
