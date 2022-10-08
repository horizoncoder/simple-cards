import React, {useEffect, useState} from 'react';
import {IuserData} from "../types/type";
import {Cards} from "../components/crads";
import '../components/cards-style.css'
export const  CardContainer =() => {
    const [data, setData]= useState<IuserData[]>([])
    useEffect(()=>{
        fetchData()
    },[])
    async function fetchData(){
        fetch('https://rickandmortyapi.com/api/character')
            .then((response) => response.json())
            .then((data) => setData(data.results)).catch((err)=>{
            console.log(err)
        });
    }
    return (
        <div className="container">
        <>
            {
                data.map(({id, name,image})=>(
                    <Cards key={id}  name={name} image={image}/>
                ))
            }
        {/*<Cards id={} name={} image={}/>*/}

        </>
        </div>
    );
}


