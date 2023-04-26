import React from "react";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { store } from './store';
import App from './App';
import { Provider } from 'react-redux';


const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(<Provider store={store}><App /></Provider>);
