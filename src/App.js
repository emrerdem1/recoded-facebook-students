import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import SignUpPage from "./SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { TheProvider } from './TheProvider';
import HomePage from './HomePage';
import Navbar from './Navbar';


const App = () => {
  return (
    <TheProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path={"/signup"} component={SignUpPage} />
            <Route exact path={"/"} component={HomePage} />
          </Switch>
        </Router>
    </TheProvider>
  );
};

export default App;
