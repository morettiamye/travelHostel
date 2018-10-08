import React, { Component } from 'react';
import './App.css';
import Duration from './component/Form/Duration'
import Season from './component/Form/Season'
import NoMatch from './component/NoMatch/NoMatch'

class App extends Component {
  render() {
    return (
      <div>
        <Duration />
        <Season />
        <NoMatch />
      </div>
    );
  }
}

export default App;
