import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import styles from "../SpinnerLoading.module.css";
import "animate.css";

const GifGrid = ({ category }) => {
    const { gifs, isLoading } = useFetchGifs(category);

    return (
        <>
            {
                isLoading ? 
                    <div
                        data-testid="spinner" 
                        className="flex justify-center mt-10"
                    ><span className={ styles.loader }></span></div> 
                :
                    <main className="mt-10 animate__animated animate__fadeIn">
                        <h2 className="text-2xl font-bold">{ category }</h2>
                        
                        {
                            gifs.length > 0 ?
                                <>
                                    <p className="text-gray-500 text-sm">{ gifs.length} GIFs encontrados</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-15 mt-5">
                                        {
                                            gifs.map(({ id, title, url }) => (
                                                <div key={ id } className="bg-white rounded-xl"> 
                                                    <img src={ url } alt={ title } />

                                                    <h3 className="p-5 font-semibold text-sm text-center">{ title }</h3>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </>
                            :
                                <p className="text-gray-500 text-sm">Sin resultados</p>
                        }
                    </main>
            }
        </>
    )
}

export default GifGrid;

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}