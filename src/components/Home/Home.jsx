import {useNavigate} from "react-router-dom";
import { useState,useEffect } from "react";



const Home =()=>{
  const navigate = useNavigate()
  const [pokeOpciones, setPokeOpciones] = useState([])
  const url='https://pokeapi.co/api/v2/pokemon';
  //const {nombre}= useParams()
  const getPokeOpciones = async()=>{
    const response = await fetch(url);
    const pokedata = await response.json();
    console.log(pokedata.results);
    setPokeOpciones(pokedata.results);
  };
useEffect(()=>{
  getPokeOpciones();},[])
  return(
    <div className="col-sm">
            <label htmlFor="opcion" className="form-label">Opciones :</label>
            <select className="form-select" id="opcion" onChange={(e)=>(navigate('/pokemones/'+e.target.value))}>
            {pokeOpciones.map((e, i) => <option key={i} value={e.name} >{e.name}</option>)}

            </select>
          </div>

  )
}
export default Home