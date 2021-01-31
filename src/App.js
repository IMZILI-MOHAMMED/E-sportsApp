import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Leagues from './pages/Leagues';
import LeaguesDetails from './pages/LeaguesDetails';
import Players from './pages/Players';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' exact component={Home} />
          <Route exact path='/teams' component={Teams} />
          <Route exact path='/leagues' component={Leagues} />
          <Route path='/leagues/:id' component={LeaguesDetails} />
          <Route exact path='/players' component={Players} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
