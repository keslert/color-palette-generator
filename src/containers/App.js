import React, { Component } from 'react';
import Palette from '../components/palette';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="overlay">Press Spacebar</div>
        <Palette />
      </div>
    );
  }
}

export default App;
