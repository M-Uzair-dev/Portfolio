import Mainpage from "./pages/js/Mainpage";
import "./app.css";
import Loading from "./pages/js/Loading";
import About from "./pages/js/About";
import LocomotiveScroll from "locomotive-scroll";
import Sidebar from "./pages/js/Sidebar";
import logo from "../images/logo.png";

function App() {
  const locomotiveScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
    multiplier: 1.4, // Effect Multiplier
    reloadOnContextChange: true,
    touchMultiplier: 2,
    smoothMobile: 0,
    smartphone: {
        smooth: !0,
        breakpoint: 767
    },
    tablet: {
        smooth: !1,
        breakpoint: 1024
    },
});

setTimeout(() => {  
    locomotiveScroll.destroy();
}, 0);
setTimeout(() => {  
    locomotiveScroll.init();
}, 50);
setTimeout(() => {  
    locomotiveScroll.update();
}, 1000);

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
