import About from "./screens/About";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Portfolio from "./screens/Portfolio";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Socials/>
    </div>
  );
}

export default App;
