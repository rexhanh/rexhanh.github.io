import NavBar from "./components/NavBar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Projects from "./pages/project/projects";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Routes>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
