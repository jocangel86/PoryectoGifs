import { useState, useEffect } from "react";
import { getGifs } from "../helpersFetch/fetchGifs";


export const useFetchGif=(category)=>{

  const [gifs, setGifs] = useState([]);
const [offset, setOffset] = useState(0);
const [isLoading,setIsLoading] = useState(true);

const getDatos = async () => {
  // const datos = await getGifs(category)
  setGifs(await getGifs(category, offset));
};

useEffect(() => {
  // La llamada a fetch es asyncrona por eso no funciona directamente
  // Hay que darle un await para que los cargue antes de renderizar.
  // getDatos();
  //
  getGifs(category, offset)
  .then(newImages => setGifs( newImages));
  setIsLoading(false);


}, []);

useEffect(() => {
  // La llamada a fetch es asyncrona por eso no funciona directamente
  // Hay que darle un await para que los cargue antes de renderizar.
  getDatos();
  //setGifs( getGifs(category));
}, [offset]);


    return{
        gifs:gifs,
        isLoading:isLoading
    }
}

