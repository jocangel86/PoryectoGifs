import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategories } from "../../../components"

describe('Pruebas en <AddCategoryEnviaValor />',()=>{

    test('Debe cambiar el valor de la caja de texto',()=>{
        render(<AddCategories onAddCategorie={()=>{}}/>)
        const input = screen.getByRole('textbox');
        fireEvent.input( input, {target: {value: 'Pepe'}});
        expect(input.value).toBe('Pepe');
    })

    test('Debe llamar onNewategory si el input tiene un valor ',()=>{
        const inputValue = 'Pokemon';
        const onAddCategorie =jest.fn();

        render(<AddCategories onAddCategorie={onAddCategorie}/>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input( input, {target: {value: inputValue}});
        fireEvent.submit( form );
        expect(input.value).toBe('');
        expect(onAddCategorie).toHaveBeenCalled();
        expect(onAddCategorie).toHaveBeenCalledTimes(1);
        expect(onAddCategorie).toHaveBeenCalledWith(inputValue);
    })

    test('No debe llamar onNewategory si el input está vacío ',()=>{

        const onAddCategorie =jest.fn();

        render(<AddCategories onAddCategorie={onAddCategorie}/>)
        const form = screen.getByRole('form');
        fireEvent.submit( form );
        expect(onAddCategorie).not.toHaveBeenCalled();
        
    })
})