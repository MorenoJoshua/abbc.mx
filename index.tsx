import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.scss';

interface AppProps { }
interface AppState {
}

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <p>
          
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
