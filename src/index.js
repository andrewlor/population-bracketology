import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import Bracketology from './components/Bracketology';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Bracketology data={
	{
		text: "root", 
		left: {
			left: {
				left: "Calgary",
				right: "Edmonton",
				correct: "Calgary"
			},
			right: {
				left: "Toronto",
				right: "Montreal",
				correct: "Toronto"
			},
			correct: "Toronto"
		},
		right: {
			left: {
				left: "Vancouver",
				right: "Victoria",
				correct: "Vancouver"
			},
			right: {
				left: "Regina",
				right: "Winnipeg",
				correct: "Winnipeg"
			},
			correct: "Vancouver"
		},
		correct: "Toronto"
	}
} />, document.getElementById('root'));
registerServiceWorker();
