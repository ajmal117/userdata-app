import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";


function App() {
  return (
    <div className="App mx-auto w-75" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
            {" "}
          </Route>
          <Route path="/signup" element={<Signup />}>
            {" "}
          </Route>
          <Route path="/create" element={<Create />}>
            {" "}
          </Route>
          <Route path="/read" element={<Read />}>
            {" "}
          </Route>
          <Route path="/update" element={<Update />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
