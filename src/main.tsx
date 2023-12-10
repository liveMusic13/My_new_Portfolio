import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.scss';
import App from './components/app/App.tsx';
import DetailPageProvider from './providers/DetailPageProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<DetailPageProvider>
			<App />
		</DetailPageProvider>
	</React.StrictMode>
);
