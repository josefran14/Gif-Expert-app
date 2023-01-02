import { useState } from "react"

export const AddCategory = (props) => {

  const {onNewCategory} = props 

  const [inputValue, setInputValue] = useState("")

  const onInputChange = (event) =>{
    setInputValue(event.target.value)
  }
  
  const onSubmit = (event) =>{
    event.preventDefault()
    if(inputValue.trim().length <= 1) return

   //setCategories(categories => [inputValue, ...categories])
   
    onNewCategory(inputValue)
    setInputValue("")
   }

  return (
    <form onSubmit={onSubmit}>
        <input 
        type="text" 
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
        />
    </form>
  )
}