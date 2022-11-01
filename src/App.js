import About from "./screens/About";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Portfolio from "./screens/Portfolio";
import Experince from "./screens/Experince";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experince/>
      <Socials/>
    </div>
  );
}

export default App;
