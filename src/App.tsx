import NavBar from "./components/NavBar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Projects from "./pages/project/projects";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  return (
    <div>
      <NavBar />
      {/* <BrowserRouter>
        <Routes>
          
        </Routes>
        <Routes>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Routes>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </BrowserRouter> */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>

        <Routes>
          <Route path="/about" element={<About />}></Route>
        </Routes>

        <Routes>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
