import { getByTitle, render, screen } from "@testing-library/react"
import { GifGrid } from "../../../components"


//Para hacer Mock:
// se importa el fichero de donde se va a hacer la fake
import { useFetchGif } from "../../../hooks/useFetchGif"
// Se asigna mock desde jest
jest.mock('../../../hooks/useFetchGif');
// Se crea la función ficticia: useFetchGif en la prueba



describe('Pruenas en componente <GifGrid />', () => { 
    const category = 'Pokemon'

    // test('Debe mostrar el loading inicialmente', () => { 

    //     useFetchGif.mockReturnValue({
    //         images:[],
    //         isLoading:true
    //     });

    //     render(<GifGrid category={category}/>)
    //     screen.debug();
    //     expect(screen.getByText('Cargando...'));
    //     expect(screen.getByText(category));
    //  })

     test('Debe mostrar la estructura de gifs por de hook useFetchGifs por mock', () => { 
        
    //     const gifs = [{
    //         id:'ABC',
    //         title: 'Pokemon',
    //         url: 'http://qw.com'
    //     },
    //     {
    //         id:'ABC2',
    //         title: 'Pokemon2',
    //         url: 'http://qw.com2'
    //     }
    // ]

    //     useFetchGif.mockReturnValue({
    //         images:gifs,
    //         isLoading:false
    //     });

    //     render( <GifGrid category={ category } /> );
    //     screen.debug();
    //     //expect( screen.getAllByRole('img').length ).toBe(2);

      })
 })