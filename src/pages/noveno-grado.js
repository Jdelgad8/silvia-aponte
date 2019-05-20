import React from 'react';
import PaginaGrados from '../common/pagina-grados';
import noveno from '../images/noveno.jpg';
import novenodosvideo from '../videos/novenodos.mp4';
import novenounovideo from '../videos/novenouno.mp4';

function NovenoGrado(props) {
    return (
        <div id="noveno">

            <PaginaGrados
                header="Noveno Grado"
                src1={novenounovideo}
                src2={novenodosvideo}
                src3={noveno}
                text={
                    <div>
                        <h3> ALGUNOS CONSEJOS QUE DEBES TENER EN CUENTA</h3>
                        <p>1. No acepten encontrarse con amigos de Internet a menos que cuenten con el permiso de sus padres.</p>
                        <p>2. No compren nada en Internet sin hablar antes con sus padres.</p>
                        <p>3. No envíen ni respondan a mensajes crueles o insultantes.</p>
                    </div>
                }

            />
        </div>
    );
}

export default NovenoGrado;