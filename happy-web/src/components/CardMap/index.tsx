import React from 'react';

import './styles.css'

import cardImg from '../../assets/images/card.jpg'

export interface cardProps {
    title: string
    description?: string
    location?: string
    image?: string
}

const Card: React.FC<cardProps> = (props: cardProps) => {
    return (
        <div className="card">
            <div className="cardHeader">
                <div className="imgHeader">
                    <img src={cardImg} alt="" />
                </div>
                <div className="imgTitle">
                    <h2>Orfanato esperança</h2>
                </div>
            </div>
        </div>
    )
}

export default Card;