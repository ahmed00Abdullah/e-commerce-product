import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Header/>
    <Container  className="my-5">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        </Routes>
    </Container>
    </>
    
  );
}

export default App;
