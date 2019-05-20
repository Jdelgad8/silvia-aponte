import React from 'react';
import PaginaGrados from '../common/pagina-grados';
import cuartouno from '../images/cuartouno.jpg';
import videodoscuarto from "../videos/videodoscuarto.mp4";
import videounocuarto from '../videos/videounocuarto.mp4';


function CuartoGrado(props) {
    return (
        <div id="cuarto">
            <PaginaGrados
                header="Cuarto Grado"
                src1={videounocuarto}
                src2={videodoscuarto}
                src3={cuartouno}

            />
        </div>
    );
}

export default CuartoGrado;