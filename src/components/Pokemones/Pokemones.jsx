import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"


async function getPokemon(url, nombre, setPokemon){
    
  const response = await fetch(url+nombre)
  const pokedata =await response.json()
  setPokemon(pokedata)
}

export default function Pokemones(){
  const [pokemon, setPokemon] = useState([])
  const url='https://pokeapi.co/api/v2/pokemon/';
  const {nombre}= useParams()
  console.log(nombre)
  useEffect(()=> { 
    getPokemon(url, nombre, setPokemon) 
  },[]);
  
  return(
        <div>
          {
            (!nombre)?
            <p>Sin información enviada</p>:
            <>
            <h1>{nombre}</h1>
            
            <p>{pokemon.weight}</p>
            <p>{pokemon.height}</p>
            <img src={pokemon.sprites?.front_default} alt=''/>

            </>
          }

        </div>
      )
}
