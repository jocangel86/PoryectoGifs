import {render, screen} from '@testing-library/react'
import { GifItem } from '../../../components'

describe('Pruebas en GiftItem',()=>{

    const title='Hola mundo';
    const url='https://github.com/'

    test('Debe hacer match con el Snapshot PropTypes',()=>{
        
        const{container} = render(<GifItem title={title} url={url}/>)

        expect(container).toMatchSnapshot();     
    })

    test('Debe mostrar la imagen con el url indicado',()=>{
        
        const{container} = render(<GifItem title={title} url={url}/>)
        //screen.debug();
        const {alt, url} = screen.getByRole('img')
        expect(url).toBe(url);    
        expect(alt).toBe(title);     
    })

    test('Debe mostrar el título el compoente',()=>{    
        render(<GifItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy();      
    })
    
})