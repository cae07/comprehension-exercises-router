import React, { Component } from 'react';
import Home from './components/Home';
import Users from './components/Users';
import About from './components/About';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Link to="/">Home</Link>
        <Route path="/users" render={(props) => <Users { ...props } greetingsMessage="Good morning" />} />
        <Link to="/users">Users</Link>
        <Route path="/about" component={About} />
        <Link to="/about">About</Link>
      </BrowserRouter>
    );
  }
}

export default App;
