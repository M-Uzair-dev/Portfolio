import Mainpage from "./pages/js/Mainpage";
import "./app.css";
import Loading from "./pages/js/Loading";
import About from "./pages/js/About";
import LocomotiveScroll from "locomotive-scroll";
import Sidebar from "./pages/js/Sidebar";
import logo from "../images/logo.png";
import Skills from "./pages/js/Skills";
import Projects from "./pages/js/Projects";
import Contact from "./pages/js/Contact";
import Footer from "./pages/js/Footer";
import { Element } from "react-scroll";
import { SnackbarProvider } from "notistack";

function App() {
  const locomotiveScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,
    mobile: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
  });
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <div className="mainframe">
          <Loading />

          <Element name="HOME">
            <Mainpage />
          </Element>
          <div className="nav">
            <Sidebar />
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <Element name="ABOUT">
            <About />
          </Element>

          <Element name="SKILLS">
            <Skills />
          </Element>

          <Element name="PROJECTS">
            <Projects />
          </Element>

          <Element name="CONTACT">
            <Contact />
          </Element>
          <Footer />
        </div>
      </SnackbarProvider>
    </>
  );
}

export default App;
