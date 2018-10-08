import React, { Component } from 'react';

import Favorite from './component/Favorite'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Favorite/>
      </div>
    );
  }
}

export default App;
