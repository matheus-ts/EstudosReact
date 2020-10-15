
import React from 'react';

// import Card from '../../components/CardMap';

import Sidebar from '../../components/sidebar';

// import image from '../../assets/images/card.jpg'


import './styles.css'

import { Map, TileLayer } from 'react-leaflet';
import Button from '../../components/button';

import btnImage from '../../assets/images/info.svg'


function Mapa() {

    return (
        <div className="map">
            <Sidebar />
            <div className="map-container">

                {/*
                    Component do Map Librarie React LeafLet 
                */}
                <Map
                    id={'mymap'}
                    center={[-23.556831106, -46.653830718]}
                    zoom={17}
                    style={{ width: '100%', height: '100%' }}
                >
                    <TileLayer url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`} />
                    <Button image={btnImage} />
                </Map>
            </div>
        </div>
    )
}

export default Mapa;