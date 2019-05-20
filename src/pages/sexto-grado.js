import React from 'react';
import PaginaGrados from '../common/pagina-grados';
import sextouno from '../images/sextouno.jpg';
import sextodosvideo from '../videos/sextodos.mp4';
import sextounovideo from '../videos/sextouno.mp4';

function SextoGrado(props) {
    return (
        <div id="sexto">

            <PaginaGrados
                header="Sexto Grado"
                src1={sextounovideo}
                src2={sextodosvideo}
                src3={sextouno}
            />
        </div>
    );
}

export default SextoGrado;
