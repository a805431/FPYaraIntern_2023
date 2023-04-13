import React from "react";
import ReactDOM from 'react-dom/client';
import { store } from './store';
import App from './App';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(<Provider store={store}><App /></Provider>);
