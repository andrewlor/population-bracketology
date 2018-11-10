import React from 'react';
import { hot } from 'react-hot-loader';
import './css/main.css';
import Bracketology from './components/Bracketology';
import Splash from './components/Splash'
import getData from './dataProcessor';
import score from './components/Score';

class App extends React.Component {
  constructor() {
    super();
    this.state = { splash: true };
  }
  
  unmountSplash = (size, metric) => {
	  getData('country_' + metric, size).then((data) => {
      this.setState({ splash: false, data: data });
	  }).catch((err => {
		  console.log(err);
	  }))
  }

  playAgain = () => {
	  score.score = 0;
    this.setState({ splash: true });
  }

  render() {
    if (this.state.splash) {
      return <Splash unmountSplash={this.unmountSplash}/>;
    } else {
      return <Bracketology data={this.state.data} playAgain={this.playAgain}/>;
    }
  }
}

export default hot(module)(App);
