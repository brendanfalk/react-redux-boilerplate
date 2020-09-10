/* 
## _APP ##

In charge of
* Main layout of page
* Routing

*/

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Global Components
import Navbar from '../Navbar'

// Pages
import Home from "../HomePage"
import About from "../AboutPage"


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
