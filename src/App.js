import React, { Components } from 'react'

import Greet from './components/Greet';
import Welcome from './components/Welcome'

class App extends Components {
  render() {
    return (
      <div className="App">
        <Greet />
        <Welcome />
      </div>
    );
  }
}

export default App;
