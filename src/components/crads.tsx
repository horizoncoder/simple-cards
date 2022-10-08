import React from 'react';
import './cards-style.css'
 interface CardsProperty {
    name:string,
    image:string

}
export const  Cards =({name,image}:CardsProperty ) => {
    return (
        // <div className='card'>
        // <div>
        //
        // </div>
        //     <h1>{name}</h1>
        // </div>

        <div className="cards">
            <img src={image} alt={image} />
                <div className="container">
                    <h4><b>{name}</b></h4>
                </div>
        </div>

    );
}


