import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"


export default function Pokemones(){
  useEffect(()=> { getPokemon() },[]);
  const [pokemon,setPokemon] = useState([])
  const url='https://pokeapi.co/api/v2/pokemon/';
  const {nombre}= useParams()
 
 
 async function getPokemon(){
    
    const response = await fetch(url+nombre)
    const pokedata =await response.json()
    //console.log(sprites,weight,height)
    setPokemon(pokedata)
  }
  
  

  
  return(
        <div>
          {
            (!nombre)?
            <p>Sin información enviada</p>:
            <>
            <h1>{nombre}</h1>
            
            <p>{pokemon.weight}</p>
            <p>{pokemon.height}</p>
            <img src={pokemon.sprites.front_default} alt=''/>

            </>
          }

        </div>
      )
}
