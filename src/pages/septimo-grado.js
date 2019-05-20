import React from 'react';
import PaginaGrados from '../common/pagina-grados';
import septimo from '../images/Septimo.jpg';
import septimodosvideo from '../videos/septimodos.mp4';
import septimounovideo from '../videos/septimouno.mp4';

function SeptimoGrado(props) {
    return (
        <div id="septimo">

            <PaginaGrados
                header="Séptimo Grado"
                src1={septimounovideo}
                src2={septimodosvideo}
                src3={septimo}
                text={
                    <div className="Horizontal-padding">
                        <div>
                            <h3> ALGUNOS CONSEJOS QUE DEBES TENER EN CUENTA</h3>
                            <p>1. No proporcionar nunca datos personales.</p>
                            <p>2. Debes pedir ayuda en caso de ver algo inusual en tu computador, Tablet o celular.</p>
                            <p>3. Aprender a diferenciar entre “amigo” y “contacto de Internet”.</p>
                            {/* <p>4. Limitar el tiempo frente a la pantalla.</p>
                        <p>5. No compartan contraseñas con nadie.</p>
                        <p>6. No publiquen fotografías o videos en Internet sin permiso de sus padres.</p>
                        <p>7. No acepten encontrarse con amigos de Internet a menos que cuenten con el permiso de sus padres.</p>
                        <p>8. No compren nada en Internet sin hablar antes con sus padres.</p>
                    <p>9. No envíen ni respondan a mensajes crueles o insultantes.</p> */}
                        </div>
                    </div>

                }

            />
        </div>
    );
}

export default SeptimoGrado;