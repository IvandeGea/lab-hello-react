import React from "react";
import icon2 from "../images/herramientas.png";
import icon3 from "../images/pantalla.png";
import icon4 from "../images/Setting.png";
import icon5 from "../images/code.png";

class Funcion extends React.Component {
    //las props se encuentran en el objeto this.props porqué es un CLASS COMPONENT
    render() {
        return (
            <div className="funciones">
                <div>
                    <img className="icon" src={icon2} alt="Icono"
                    />
                    <h1>Declarative</h1>
                    <p>React makes it painless to create interactive UIs.</p>
                </div>
                <div>
                    <img className="icon3" src={icon3} alt="Icono"
                    />
                    <h1>Components</h1>
                    <p>Build encapsulated components that manage their state.</p>
                </div>
                <div>
                    <img className="icon4" src={icon4} alt="Icono"
                    />
                    <h1>Sing-Way</h1>
                    <p>A set of inmutable values are passed to the component's.</p>
                </div>
                <div>
                    <img className="icon5" src={icon5} alt="Icono"
                    />
                    <h1>JSX</h1>
                    <p>Statically-typed, designed to run on modern browsers.</p>
                </div>


            </div>
        );
    }
}


export default Funcion;