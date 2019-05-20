import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import App from './App';
import CuartoGrado from './pages/cuarto-grado';
import NovenoGrado from './pages/noveno-grado';
import OctavoGrado from './pages/octavo-grado';
import Padres from './pages/padres';
import QuintoGrado from './pages/quinto-grado';
import SeptimoGrado from './pages/septimo-grado';
import SextoGrado from './pages/sexto-grado';

const index = document.getElementById('root');

//ReactDOM.render(que voy a renderizar, donde lo haré);
//const holaMundo = <h1>hola mundo!</h1>;
render((
    <HashRouter>
        <div>
            <Route path="/" component={App} exact />
            {/* <Route path="/" component={PapaginaGrados} /> */}
            <Route path="/cuarto-grado" component={CuartoGrado} />
            <Route path="/quinto-grado" component={QuintoGrado} />
            <Route path="/sexto-grado" component={SextoGrado} />
            <Route path="/septimo-grado" component={SeptimoGrado} />
            <Route path="/octavo-grado" component={OctavoGrado} />
            <Route path="/noveno-grado" component={NovenoGrado} />
            <Route path="/padres" component={Padres} />
        </div>
    </HashRouter>
), index);