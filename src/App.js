//import './App.css';
import {
    Routes,
    Route,
    BrowserRouter
} from "react-router-dom";
import { isExpired } from "react-jwt";
import {Home} from "./components/Home";
import Details from "./components/Details";
import SignUpForm from "./components/signUp";
import LoginForm from "./components/LoginForm";
import Add from "./components/Add";
import {useState} from "react";

function App() {
    const [search, setSearch] = useState("");
    return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Home search={search} setSearch={setSearch} />}></Route>
              <Route path="/add" element={<Add/>}/>
              {isExpired(localStorage.getItem("token")) ? <Route path="/login" element={<LoginForm/>}/>: null}
              {isExpired(localStorage.getItem("token")) ? <Route path="/signup" element = {<SignUpForm/>}></Route>: null}
              <Route path ="/details/:movieid" element = {<Details/>}></Route>
              <Route path="/*" element={<Home/>}/>
          </Routes>
      </BrowserRouter>

    );
}

export default App;

