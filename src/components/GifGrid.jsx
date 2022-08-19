import { GifItem } from "./GifItem";
import { useFetchGif } from "../hooks/useFetchGif";

export const GifGrid=({ category })=> {
  // Se generó el custoHook

  const { gifs, isLoading } = useFetchGif(category);

  // console.log({ gifs, isLoading });

  return (
    <>
      <h3>{category}</h3>
      {/* <p>Los gifs de ésta categoría:</p> */}

{isLoading &&<div>Cargando...</div> }

      <div className="card-grid">
        {gifs.map((gif) => {
          return (
            <GifItem key={gif.id} {...gif} />
            //  {...gif} es igual al  de abajo, manda todas las props de gif.
            // El anterior se usa cuando tienes muchas propiedades por mandar.
            //  gif={gif}
          );
        })}
        {/* <button
          onClick={() => {
            setOffset(offset - 10);
          }}
        >
          -- Anterior
        </button>
        |
        <button
          onClick={() => {
            setOffset(offset + 10);
          }}
        >
          Siguiente --
        </button> */}
      </div>
    </>
  );
}