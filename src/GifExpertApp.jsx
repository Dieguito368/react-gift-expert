import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
    const [ categories, setCategories ] = useState([ ]);

    const handleAddCategory = newCategory => {
        if(categories.includes(newCategory)) return;

        setCategories([ newCategory, ...categories ]);
    }
    
    return (
        <div className="w-11/12 md:w-10/12 mt-5 mb-20 m-auto p-10">
            <h1 className="font-black text-3xl mb-5">Categorias</h1>

            <AddCategory handleAddCategory={ handleAddCategory } /> 

            { categories.map(category => <GifGrid key={ category } category={ category } />) }
        </div>
    )
}

export default GifExpertApp;