import React from "react"
import './CardUI.css'

export const CardUI = ({data}) => {

    const {gender, id, image, location, name, origin, species, status} = data
    
    return(

        <div className="card-container" key={id}>       
            <div className='div-image-card'>
                <img className='image-card' src={image} alt={name} />
            </div>
            <div className='div-info-card'>
                <h1>{name}</h1>
                <p>Gender: {gender}</p>
                <p>Species: {species}</p>
                <p>Status: {status}</p>
                <p>Location: {location.name}</p>
                <p>Origin: {origin.name}</p>
                <button className='btn-card-favorites'>Add</button>            
            </div>
        </div>
    )
}