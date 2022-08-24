import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGif } from "../../../hooks/useFetchGif"

describe('Pruebas en hook de useFetchGifs', () => { 
  test('Debe regresar el estado inicial', () => { 
    // El estado inicial es que regrese el [], true, 0
    // Para mandalo llamar se usa rwenderHook

    const {result} = renderHook(()=> useFetchGif('Pokemon'));
    //console.log(result);
    const {gifs, isLoading, offset, setOffset} = result.current; 

    expect(gifs.length).toBe(0);
    expect(isLoading).toBe(true);
    expect(offset).toBe(0);
   })

   test('Debe regresar un arreglo de gifs y isLoading false', async () => { 
    // El estado inicial es que regrese el [], true, 0
    // Para mandalo llamar se usa rwenderHook

    const {result} = renderHook(()=> useFetchGif('Pokemon'));
    //console.log(result);
    // Para esperar por el resultado de la carga se usa waitFor (promesa)

    await waitFor(
      () => expect(result.current.gifs.length).toBeGreaterThan(0),
      {
        // Lanza error en 5000 ms en caso de no tener la respuesta
        timeout: 5000,
      }
    )
    console.log(result);
    const {gifs, isLoading, offset, setOffset} = result.current; 

    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
    expect(offset).toBe(0);
   })
 })