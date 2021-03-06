import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './estilos.css';
import colegio from './images/colegio.jpg';
import logo from './images/logo.jpg';

class App extends Component {
    render() {
        return (
            <div className="Horizontal">
                <div className="Side-drawer">
                    <h1 className="white-title">Grados</h1>
                    <Link to="/cuarto-grado">
                        <h2>Cuarto </h2>
                    </Link>

                    <Link to="/quinto-grado">
                        <h2>Quinto </h2>
                    </Link>

                    <Link to="/sexto-grado">
                        <h2>Sexto </h2>
                    </Link>

                    <Link to="/septimo-grado">
                        <h2>Septimo </h2>
                    </Link>

                    <Link to="/octavo-grado">
                        <h2>Octavo </h2>
                    </Link>

                    <Link to="/noveno-grado">
                        <h2>Noveno </h2>
                    </Link>

                    <Link to="/padres">
                        <h2>Instructivo Padres</h2>
                    </Link>
                    <img src={logo}
                        width="250px"
                        height="200px"
                        alt="principal" />
                </div>
                <div className="Home">
                    <div className="Center">
                        <h1> Colegio Silvia Aponte</h1>
                        <img src={colegio}
                            width="500px"
                            height="500px"
                            alt="principal" />

                    </div>
                </div>
            </div>
        )
    }
}


export default App;