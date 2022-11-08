// Path: frontend\src\App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import App from './App';

import { WorkoutsContextProvider } from "./context/WorkoutsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<WorkoutsContextProvider>
			<App />
		</WorkoutsContextProvider>
	</React.StrictMode>
);