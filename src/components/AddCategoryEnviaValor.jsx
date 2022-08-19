import { useState } from "react"

// En esta implementación, se recibe como prop la fución que agrega la categoria onAddCategorie
// Y se le manda el valor de la caja para que la reciba en la función y haga el setInputValue
export const AddCategories=({onAddCategorie})=>{

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
        <form onSubmit={enviar}>
            <input  type="text" 
                    placeholder="Buscar gifs / Agregar categoría" 
                    value = {inputValue}
                    onChange={onChangeValue}
                    />
            {/* <button  onClick={(event)=>onAddCategorie(event)} >Add</button> */}
            {/* <button  onClick={onAddCategorie} >Add</button> */}
        </ form>
    )
}