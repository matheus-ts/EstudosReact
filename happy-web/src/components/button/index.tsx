import React from 'react';

import './styles.css';


export interface btnProps {
    image: string
}

const Button: React.FC<btnProps> = (props: btnProps) => {
    return (
        <div className="button">

            <img src={props.image} alt="" />
        </div>
    )
}

export default Button;