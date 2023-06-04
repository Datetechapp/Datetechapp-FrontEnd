import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from "./components/App";
import Modal from 'react-modal';
import { BrowserRouter } from "react-router-dom"

Modal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

