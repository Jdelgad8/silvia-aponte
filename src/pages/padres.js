import React from 'react';
import PaginaGrados from '../common/pagina-grados';
import padresuno from '../images/padresuno.jpg';
import videounopadres from '../videos/padresdos.mp4';
import videodospadres from "../videos/padresuno.mp4";


function Padres(props) {
  return (
    <div id="padres">
      <PaginaGrados
        header="Instructivo Padres"
        src1={videounopadres}
        src2={videodospadres}
        src3={padresuno}
      />
    </div>
  );
}

export default Padres;