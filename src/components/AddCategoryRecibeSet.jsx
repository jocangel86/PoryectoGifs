import { useState } from "react"

// En esta implementación, se recibe como prop la fución setInputValue y se afecta directamente el estado.
export const AddCategories=({setCategories})=>{

    const [inputValue, setInputValue] = useState('')

    const onChangeValue = (e) =>{
        setInputValue(e.target.value)
    }

    const enviar = (e)=>{
        e.preventDefault();

        if(inputValue.trim().length <= 1) return;

        console.log(inputValue)
        setCategories(categories => [...categories, inputValue]);
        setInputValue('')
    }

    return(
        <form onSubmit={enviar}>
            <p>Add Categorie:</p>
            <input  type="text" 
                    placeholder="Buscar gifs" 
                    value = {inputValue}
                    onChange={onChangeValue}
                    />
            {/* <button  onClick={(event)=>onAddCategorie(event)} >Add</button> */}
            {/* <button  onClick={onAddCategorie} >Add</button> */}
        </ form>
    )
}