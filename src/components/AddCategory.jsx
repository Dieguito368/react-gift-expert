import { useState } from "react";

const AddCategory = ({ handleAddCategory }) => {
    const [ inputValue, setInputValue ] = useState("");

    const handleChangeInput = e => setInputValue(e.target.value);
    
    const handleSubmit = e => {
        e.preventDefault();

        handleAddCategory(inputValue.trim()); 

        setInputValue("");
    }

    return (
        <form onSubmit={ handleSubmit } aria-label="form">
            <input 
                type="text"
                placeholder="Buscar Gifs...."
                value={ inputValue }
                onChange={ handleChangeInput }
                className="border-2 border-gray-300 px-5 py-3 outline-purple-500 w-full rounded bg-white"
            />

            <div className="flex justify-end mt-10">
                <input 
                    type="submit" 
                    value="Buscar" 
                    className="
                        bg-purple-500 text-white w-40 py-3 rounded font-bold uppercase text-xs cursor-pointer hover:bg-purple-700 duration-500 transition-all
                        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-purple-500
                    "    
                    disabled={ inputValue.trim().length <= 0 }
                />
            </div>

        </form>
    )
}

export default AddCategory;