

//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Shell from './components/layouts/shell';
import Anonymous from './components/anonymous/anonymous';
import AccountPolicy from './components/accountPolicy/accountPolicy';
import Store from './stores/store';
import AuthService from './services/authorizationService';


const kickOff = () => {
    const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
    const rootElement = document.getElementById('root');
    const authService = new AuthService();
    const user = authService.getUser();

    if (!user) {
        ReactDOM.render(<Anonymous />, rootElement);
    } else if (authService.isAdminAccount()) {
        ReactDOM.render(<AccountPolicy />, rootElement);
    } else {
        ReactDOM.render(
            <BrowserRouter basename={baseUrl}>
                <Provider store={Store}>
                    <Shell />
                </Provider>
            </BrowserRouter>,
            rootElement);
    }
};

kickOff();




