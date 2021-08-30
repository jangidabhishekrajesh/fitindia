import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import FitPrograms from "./Components/About/corporate";
import personaltraining from "./Components/About/personaltraining";
import Quick from "./Components/About/quick";
import Group from "./Components/About/group";
import Wellness from "./Components/About/wellness";
import Franchise from "./Containers/Services";
import Gallery from "./Containers/Blogs";
import Contact from "./Containers/Contact";
import Signin from "./Components/Sign/signin";
import Signup from "./Components/Sign/signup";
import Password from "./Components/Sign/password";



function App() {
  return (
    <>
      <Router>
        <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/fitPrograms" component={FitPrograms} exact />
            <Route path="/corporate" component={FitPrograms} exact />
            <Route path="/personaltraining" component={personaltraining} exact />
            <Route path="/quick" component={Quick} exact />
            <Route path="/group" component={Group} exact />
            <Route path="/wellness" component={Wellness} exact />
            <Route path="/franchise" component={Franchise} exact />
            <Route path="/gallery" component={Gallery} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/signin" component={Signin} exact />
            <Route path="/signup" component={Signup} exact />
            <Route path="/password" component={Password} exact />
          </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
