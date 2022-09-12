import axios from "axios"
import React from "react"
import './Home.css'
import { useState,useEffect } from "react"
import { CardUI } from "../../UI/CardUI/CardUI"

export const Home = () => {

    const [card, setCard] = useState([])
    const URL = `https://rickandmortyapi.com/api/character`
    
    const getData = async () => {
        await axios.get(URL)
        .then(res => {
            setCard(res.data.results)
        }).catch(err => {         
            console.log(err)
        })
    }

    useEffect(() => {
        getData()
    }, [URL])

    return(
        <div className='card-render-container'>
            <div className='card-render'>
                {
                    card.map(
                        card => (
                            <CardUI key={card.id} data={card}/>
                        )
                    )
                }
            </div>
        </div>
    )
}