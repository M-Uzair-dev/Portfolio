import Mainpage from "./pages/js/Mainpage";
import "./app.css";
import Loading from "./pages/js/Loading";
import About from "./pages/js/About";
import LocomotiveScroll from "locomotive-scroll";
import Sidebar from "./pages/js/Sidebar";
import logo from "../images/logo.png";

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
      <div className="mainframe">
        <Loading />
        <Mainpage />
        <div className="nav">
          <Sidebar />
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <About />
      </div>
    </>
  );
}

export default App;
