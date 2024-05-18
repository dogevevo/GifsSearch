import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('one punch');

    const onInputChange = ( {target}) => {
        setInputValue( target.value )
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if ( inputValue.trim().length  <= 1 ) return; 
        // setCategories( categoires => [inputValue, ...categoires] ) 
        setInputValue('')
        onNewCategory(inputValue.trim())
    }

  return (
    <form onSubmit={ onSubmit }>
        <input 
        type="text"
        placeholder=" Buscar Gifs  "
        value={ inputValue }
        onChange={ onInputChange}
        />
    </form>
  )
}
