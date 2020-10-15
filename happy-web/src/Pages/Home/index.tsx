import React from 'react'

import './styles.css'
import logoHome from '../../assets/images/logo.svg';

import imgHome from '../../assets/images/bg.svg'
import Button from '../../components/button';

import icon from '../../assets/images/arrow.svg'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container-home">
            <div className="container-left">
                <img src={logoHome} alt="Logo Happy" />
                <h2 className="logo-text">
                    Leve felicidade para o mundo
                </h2>
                <h3 className="subtitle">Visite orfanatos e mude o dia
                de muitas crianças.
                </h3>
            </div>
            <div className="container-img">
                <img src={imgHome} alt="" />
            </div>
            <div className="container-right">
                <h2 className="city">São Paulo</h2>
                <Link to="/map"> <Button image={icon} /> </Link>
            </div>
        </div>
    )
}

export default Home;