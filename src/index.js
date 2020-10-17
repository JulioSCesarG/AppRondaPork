import React from 'react';
//import ReactDOM from 'react-dom';
//import ReactExport from "react-data-export";
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { RegistroContextProvider } from './context/registros';
import Download from './pages/dashboard';
import Login from './pages/login';
import Seccion1 from './pages/formas/seccion1';
import Seccion2 from './pages/formas/seccion2';
import Seccion3 from './pages/formas/seccion3';
import './style.scss';
import {watchrondaPork} from './services/firebase';
import Presentacion from './pages/formas/presentacion';

watchrondaPork((rondaPork) =>{
    console.log(rondaPork);
});

const root = (
    <BrowserRouter>
        <RegistroContextProvider>
            <Switch>
                <Route path= "/login" component={Login} />
                <Route path= "/seccion1" component={Seccion1} />
                <Route path= "/seccion3" component={Seccion3} />
                <Route path= "/presentacion" component={Presentacion} />
                <Route path= "/formas"  component={Seccion2} />  
                <Route path= "/dashboard" component={Download} />
                <Redirect from="/" to = "/formas" />
            </Switch>
        </RegistroContextProvider>            
    </BrowserRouter>
);
render(root, document.getElementById('root'));
