import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.scss';
import App from './components/app/App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);