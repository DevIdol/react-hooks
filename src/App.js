import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import UseContext from "./Pages/useContext/UseContext";
import UseContextItem from "./Pages/useContext/UseContextItem";
import UseEffect from "./Pages/UseEffect/UseEffect";
import UseEffectItem from "./Pages/UseEffect/UseEffectItem";
import UseReducer from "./Pages/UseReducer/UseReducer";
import UseReducerItem from "./Pages/UseReducer/UseReducerItem";
import UseRef from "./Pages/UseRef/UseRef";
import UseRefItem from "./Pages/UseRef/UseRefItem";
import UseState from "./Pages/UseState/UseState";
import UseStateItem from "./Pages/UseState/UseStateItem";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route
            index
            element={
              <h1 style={{ textAlign: "center", paddingTop: "40px" }}>
                Select Hook Tutorial
              </h1>
            }
          />
          <Route path="UseState" element={<UseStateItem />}>
            <Route
              index
              element={<h1 style={{ padding: "30px" }}>Select Example</h1>}
            />
            <Route path=":usestateId" element={<UseState />} />
          </Route>
          <Route path="UseEffect" element={<UseEffectItem />}>
            <Route
              index
              element={<h1 style={{ padding: "30px" }}>Select Example</h1>}
            />
            <Route path=":useeffectId" element={<UseEffect />} />
          </Route>
          <Route path="UseContext" element={<UseContextItem />}>
            <Route
              index
              element={<h1 style={{ padding: "30px" }}>Select Example</h1>}
            />
            <Route path=":usecontextId" element={<UseContext />} />
          </Route>
          <Route path="UseRef" element={<UseRefItem />}>
            <Route
              index
              element={
                <h1 style={{ padding: "30px", color: "red" }}>
                  Select Example
                </h1>
              }
            />
            <Route path=":userefId" element={<UseRef />} />
          </Route>
          <Route path="UseReducer" element={<UseReducerItem/>} >
            <Route path=":usereducerId" element={<UseReducer/>} />
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
