import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";

const App = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<NavBar/>} />
      <Route path="*" element={
        <h2 style={{paddingTop: "40px", textAlign:"center"}}>404 Not Found!</h2>
      } />
    </Routes>
  </Router>;
};

export default App;
