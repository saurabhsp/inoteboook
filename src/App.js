import "./App.css";
import Navbar from "./components/Navbar";
import NoteState from "./context/Notes/NoteState";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert";


function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Alert message="This is an Alert Testing"/>
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
