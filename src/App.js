//import './App.css';
import {
    Routes,
    Route,
    BrowserRouter
} from "react-router-dom";
import Login from "./components/Login";
import {Home} from "./components/Home";
import Register from "./components/register";
import Details from "./components/Details";

function App() {
    return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element = {<Home />}></Route>
              <Route path="/signin" element={<Login/>}/>
              <Route path="/signup" element = {<Register/>}></Route>
              <Route path ="/details/:movieid" element = {<Details/>}></Route>
              <Route path="/*" element={<Home/>}/>
          </Routes>
      </BrowserRouter>

    );
}

export default App;

