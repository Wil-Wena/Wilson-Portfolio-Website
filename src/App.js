import About from "./screens/About";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Portfolio from "./screens/Portfolio";
import Experince from "./screens/Experince";
import Contact from "./screens/Contact";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experince/>
      <Contact/>
      <Socials/>
    </div>
  );
}

export default App;
