import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo-icon.png'

import './styles.css'

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </Link>
            <div className="text-container">
                <h2 className="text-side-1">
                    Escolha
                    um orfanato
                    no mapa
                </h2>
                <h3 className="text-side-2">
                    Muitas crianças estão
                    esperando a sua visita :D
                </h3>
            </div>
            <div className="location">
                <p>São Paulo</p>
                <Link to="/orfanatos">
                    <h4>Ver locais</h4>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;