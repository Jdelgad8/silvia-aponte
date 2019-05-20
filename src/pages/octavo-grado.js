import React from 'react';
import PaginaGrados from '../common/pagina-grados';
import octavo from '../images/Octavo.jpg';
import octavodosvideo from '../videos/octavodos.mp4';
import octavounovideo from '../videos/octavouno.mp4';

function OctavoGrado(props) {
    return (
        <div id="octavo">
            <PaginaGrados
                header="Octavo Grado"
                src1={octavounovideo}
                src2={octavodosvideo}
                src3={octavo}
                text={
                    <div>
                        <h3 className="texto-blanco"> ALGUNOS CONSEJOS QUE DEBES TENER EN CUENTA</h3>

                        <p className="texto-blanco">1. Limitar el tiempo frente a la pantalla.</p>
                        <p className="texto-blanco">2. No compartan contraseñas con nadie.</p>
                        <p className="texto-blanco">3. No publiquen fotografías o videos en Internet sin permiso de sus padres.</p>

                    </div>
                }

            />
        </div>
    );
}

export default OctavoGrado;