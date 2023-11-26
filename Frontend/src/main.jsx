import React from 'react';
import ReactDOM from 'react-dom/client';
import io from 'socket.io-client';

import './Styles/index.css';

import App from './App.jsx';

const SocketIO = io('/');
console.log(SocketIO);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
