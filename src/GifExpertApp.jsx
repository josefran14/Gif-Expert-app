import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

   const [categories, setCategories] = useState([])

   const addCategory = (newCategory) =>{
      
      if(categories.includes(newCategory)) return

      setCategories([ newCategory, ...categories ])
      //setCategories(c => [...c, "Mario Bros"])
   }

  return (
    <>
      {/* titulo */}
     <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory 
      //setCategories = {setCategories}
      onNewCategory = { value => addCategory(value)}
      />
   
      {/* Listado de gif */}
        {categories.map((category) =>(
            <GifGrid 
            key={category}
            category={category}/>          
        ))
        }
         {/* Gif Item */}
    </>
  )
}
