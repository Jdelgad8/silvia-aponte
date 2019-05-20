import React from 'react';
import { Link } from 'react-router-dom';
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import '../estilos.css';
import Boton from './boton';
import Header from './header';

function PaginaGrados(props) {
    return (
        <div>
            <Header header={props.header}>
                {props.header}
            </Header>
            <div>

                <div className="Center">

                    <div className="Videos">
                        <Player
                            playsInline
                            src={props.src1}
                        // src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                        />
                    </div>
                    <div className="Videos">
                        <Player
                            playsInline
                            src={props.src2}
                        // src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                        />
                    </div>

                </div>
            </div>
            <div className="Vertical">
                <div title={props.text}>
                    <div className="Center">
                        {props.title}
                    </div>
                </div>
                <div className="Center">
                    <div className="Horizontal">
                        <div className="Horizontal-padding">
                            <img src={props.src3}
                                width={props.width}
                                height={props.height}
                                alt=""
                            />
                        </div>
                    </div>
                    <div text={props.text}>
                        <div className="Center">
                            {props.text}
                        </div>
                    </div>

                </div>
            </div>
            <Link to="/">
                <Boton>
                    Volver
            </Boton>
            </Link>
        </div>
    )
}

export default PaginaGrados;