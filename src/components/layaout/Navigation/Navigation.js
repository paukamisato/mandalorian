import React, { Link } from "react-router-dom";
import '../Navigation/Navigation.css';

export default function Navigation() {

    return(
        <header>
            <section className ="section-menu">
                <div className ="row">
                    <div className ="col-1-of-3">
                        <div className ="btn-box">
                            <a href="/rules" className = "btn btn-black">Reglas del juego</a>
                        </div>
                    </div>
                    <div class="col-1-of-3">
                        <div className="btn-box">
                            <a href="/pieces" className = "btn btn-black">Fichas</a>
                        </div>
                    </div>
                    <div class="col-1-of-3">
                        <div className="btn-box">
                            <a href="/game" className = "btn btn-black">Juego</a>
                        </div>
                    </div>
                </div>
            </section>
        </header>   

    );
}
