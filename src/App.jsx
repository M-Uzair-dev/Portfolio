import Mainpage from "./pages/js/Mainpage";
import "./app.css";
import Loading from "./pages/js/Loading";

function App() {
  return (
    <>
      <div className="mainframe">
        <Loading />
        <Mainpage />
      </div>
    </>
  );
}

export default App;
