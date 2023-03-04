import React from "react";
import ironhack from "../images/ironhack-logo-xs.png";
import icon1 from "../images/despleglable2.png";

class Header extends React.Component {
    //las props se encuentran en el objeto this.props porqué es un CLASS COMPONENT
    render() {
        return (
            <div className="fondo">
                <div className="justify-img-top ">
                    <img className="ironhack" src={ironhack} alt="Ironhack logo"
                    />

                    <img className="icon1" src={icon1} alt="Icono desplegable" />
                </div>
                <section className="article">
                    <h1 className="titulo">  Say hello to ReactJS</h1>
                    <p>
                        You will learn how to use the most popular frontend library, and become a super ninja developer.
                    </p>
                    <h2> Awesome!</h2>
                </section>



            </div>
        );
    }
}


export default Header;