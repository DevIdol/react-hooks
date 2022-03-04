import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import UseState from "./Pages/UseState/UseState";
import UseStateItem from "./Pages/UseState/UseStateItem";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="UseState" element={<UseStateItem />}>
            <Route path=":usestateId" element={<UseState />} />
          </Route>
          <Route
            path="*"
            element={
              <h2 style={{ paddingTop: "40px", textAlign: "center" }}>
                404 Not Found!
              </h2>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
