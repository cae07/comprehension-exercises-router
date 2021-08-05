import React, { Component } from 'react';
import Home from './components/Home';
import Users from './components/Users';
import About from './components/About';
import { BrowserRouter, Link, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/users/:id" render={(props) => <Users { ...props } greetingsMessage="Good morning" />} />
          <Link to="/users">Users</Link>
          <Route path="/about" component={About} />
          <Link to="/about">About</Link>
          <Route exact path="/" component={Home} />
          <Link to="/">Home</Link>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
