import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Home from "./components/Home/Home";
import PostDetail from "./components/PostDetail/PostDetail";

function App() {
  return (

    <div className="App">
      <Router>
      
      
      <ul>
        <li>
        <Link to="/home">Home</Link>
        </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          </ul>
      <Switch>
          
          
          

        <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
          <About></About>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/post/:id">
            <PostDetail></PostDetail>
          </Route>

          {/* <Route path="*">
            <NoMatch />
          </Route> */}

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
