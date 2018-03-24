import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import Bracketology from './components/Bracketology';
import registerServiceWorker from './registerServiceWorker';
import getData from './dataProcessor';

ReactDOM.render(<Bracketology data={getData(16)} />, document.getElementById('root'));
registerServiceWorker();
