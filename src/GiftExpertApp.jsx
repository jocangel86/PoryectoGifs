// Se importa archivo de estilos global en el main

import { useState } from "react";
//Se usa archivo de barril (index.js)de la carpeta, para importar todo de una carpeta:
import {AddCategories, GifGrid} from './components'
// Con lo anterior evitas las 3 importaciones de abajo: 
// import { AddCategories } from "./components/AddCategoryEnviaValor";
// import GifGrid from "./components/GifGrid";
// import { AddCategories } from "./components/AddCategoryRecibeSet";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategorie = (inputValue) => {
    //e.preventDefault();

    // const duplicado = categories.filter(category=>category===inputValue);
    // console.log('duplicado:'+duplicado);
    // if(duplicado.length!=0) return;
    if (categories.includes(inputValue)) return;

    setCategories([...categories, inputValue]);
    //setCategories(cat => [...cat, 'nueva'])
  };

  return (
    <>
      <h1>Gift Expert APP</h1>
      {/* <p>API_Key: GomHNdKsdOkFsrNwAZ5JOh2Vqvl7eIWj</p> */}
      {/* Input */}
      <AddCategories
        // setCategories={setCategories}
        onAddCategorie={(event) => onAddCategorie(event)}
        setCategories={setCategories}
      />

      {/* Listado de Categorías */}
      {categories.map((category) => (
        <GifGrid 
              key={category} 
              category={category} 
              setCategories={setCategories}
              categories={categories}/>
      ))}
      {/* <button onClick={onAddCategorie}>Agregar</button> */}
    </>
  );
};
