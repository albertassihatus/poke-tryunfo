import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './images/logo.png';
import Create from './Pages/Create';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import OpenBox from './Pages/OpenBox';
import './styles/card.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <img
          className="imgLogo"
          src={ logo }
          alt="pokemon logo"
        />
        <BrowserRouter>
          <Switch>
            <Route exact path="/poke-tryunfo" component={ Home } />
            <Route exact path="/poke-tryunfo/create-card" component={ Create } />
            <Route exact path="/poke-tryunfo/open-box" component={ OpenBox } />
            <Route component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
