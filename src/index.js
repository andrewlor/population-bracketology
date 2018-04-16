import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import Bracketology from './components/Bracketology';
import Splash from './components/Splash'
import registerServiceWorker from './registerServiceWorker';
import getData from './dataProcessor';
import score from './components/Score';

let unmountSplash = (size) => {
	getData('country_area', size).then((data) => {
		console.log(data)
		ReactDOM.unmountComponentAtNode(document.getElementById('root'))
		ReactDOM.render(<Bracketology data={data} playAgain={playAgain}/>, document.getElementById('root'))
	}).catch((err => {
		console.log(err)
	}))
}

let playAgain = () => {
	score.score = 0
	ReactDOM.unmountComponentAtNode(document.getElementById('root'));
	ReactDOM.render(<Splash unmountSplash={unmountSplash}/>, document.getElementById('root'));
}

ReactDOM.render(<Splash unmountSplash={unmountSplash}/>, document.getElementById('root'));

registerServiceWorker();
