import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Custom
import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
