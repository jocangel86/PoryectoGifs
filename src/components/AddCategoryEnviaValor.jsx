import { useState } from "react"
import PropTypes from 'prop-types';


// En esta implementación, se recibe como prop la fución que agrega la categoria onAddCategorie
// Y se le manda el valor de la caja para que la reciba en la función y haga el setInputValue
export const AddCategories=({onAddCategorie, setCategories})=>{

    const [inputValue, setInputValue] = useState('')

    const onChangeValue = (e) =>{
        setInputValue(e.target.value)
    }

    const enviar = (e)=>{
        e.preventDefault();

        if(inputValue.trim().length <= 1) return;

        console.log(inputValue)
        // setCategories(categories => [...categories, inputValue]);



        onAddCategorie(inputValue)
        setInputValue('')
    }

    return(
        <>
        <form onSubmit={enviar} aria-label="form">
            <input  type="text" 
                    placeholder="Buscar gifs / Agregar categoría" 
                    value = {inputValue}
                    onChange={onChangeValue}
                    />
            {/* <button  onClick={onAddCategorie} >Add</button> */}
        </ form>
        <button  onClick={()=> setCategories([])} >Limpiar búsquedas</button>
        </>

    )
}

AddCategories.propTypes={
    onAddCategorie: PropTypes.func.isRequired
}