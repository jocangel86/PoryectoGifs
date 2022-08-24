import { GifItem } from "./GifItem";
import { useFetchGif } from "../hooks/useFetchGif";
import { useState } from "react";
import PropTypes from 'prop-types';

export const GifGrid=({ category, categories, setCategories })=> {
  // Se generó el custoHook

  const { gifs, isLoading, offset, setOffset } = useFetchGif(category);
  //const {offset, setOffset} = useState(category.offset)

  //console.log({ gifs, isLoading, offset });

  const eliminaCategoria = (nombre)=>{
   

    //Filtrar para eliminar del array la que recibo
    let newCategories = categories.filter(cat => cat !== nombre ) 
    //Actualizar estado listado
    setCategories(newCategories)

  }



  return (
    <>
      <h3>{category}</h3>
      {/* <p>Los gifs de ésta categoría:</p> */}

{isLoading &&<div>Cargando...</div> }

      <div className="card-grid">
        {gifs.map((gif) => {
          return (
            <GifItem key={gif.id} {...gif}/>
            //  {...gif} es igual al  de abajo, manda todas las props de gif.
            // El anterior se usa cuando tienes muchas propiedades por mandar.
            //  gif={gif}
          );
        })}

        {offset>0 &&     
        <button onClick={() => { setOffset(offset - 10); }}>-- Anterior </button>
        }
        |
        <button onClick={() => {eliminaCategoria(category);}}>-- Eliminar -- </button>
        |
        <button
          onClick={() => {
            setOffset(offset + 10);
          }}
        >
          Siguiente --
        </button>
      </div>
    </>
  );
}

GifGrid.propTypes={
  category: PropTypes.string.isRequired,
}