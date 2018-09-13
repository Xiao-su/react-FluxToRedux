import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ControlPanel from './Views/ControlPanel'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ControlPanel />, document.getElementById('root'));
registerServiceWorker();
