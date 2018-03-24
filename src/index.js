import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import Bracketology from './components/Bracketology';
import Splash from './components/Splash'
import registerServiceWorker from './registerServiceWorker';
import getData from './dataProcessor';

let unmountSplash = (size) => {
	ReactDOM.unmountComponentAtNode(document.getElementById('root'));
	ReactDOM.render(<Bracketology data={getData(size)} />, document.getElementById('root'));
}

ReactDOM.render(<Splash unmountSplash={unmountSplash}/>, document.getElementById('root'));

registerServiceWorker();
