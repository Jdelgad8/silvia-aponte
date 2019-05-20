import React from 'react';
import PaginaGrados from '../common/pagina-grados';
import quintouno from "../images/quintouno.jpg";
import quintodosvideo from "../videos/quintodos.mp4";
import quintounovideo from "../videos/quintouno.mp4";

function QuintoGrado(props) {
    return (
        <div id="quinto">
            <PaginaGrados
                header="Quinto Grado"
                src1={quintounovideo}
                src2={quintodosvideo}
                src3={quintouno}
                height={640}
                width={453}
                title={
                    <h2> Esto te podría interesar</h2>
                }
            />
        </div>
    );
}

export default QuintoGrado;