import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from "./components/App";
import Modal from 'react-modal';
import { BrowserRouter } from "react-router-dom"
import { store } from "./store"
import { Provider } from "react-redux"

Modal.setAppElement('#root');


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

