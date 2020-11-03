import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Leagues from './pages/Leagues';
import Players from './pages/Players';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/teams' component={Teams} />
          <Route path='/leagues' component={Leagues} />
          <Route path='/players' component={Players} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
