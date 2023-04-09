import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";


const SearchedRecipe = () => {
    let search = useParams();
    const value = search.search;

    const [recipes, setRecipes] = useState([]);
    const getRecipes = async () => {
        const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_APP_API_KEY}&query=${value}&number=9`)
        const data = await res.json();
        setRecipes(data.results);
    }

    useEffect(() => {
        getRecipes();
    }, [value])



    return (
        <>
            <h2 className="text-md sm:text-xl md:text-3xl md:ml-4 font-bold p-6 mt-2">Search results for <span className="uppercase underline">{value}</span></h2>
            <div className="grid grid-cols-2 mx-auto md:grid-cols-3 max-w-[1200px] gap-3 xl:grid-cols-4">
                {recipes.map((recipe) => {
                    return (
                        <Link key={recipe.id} to={'/recipe/' + recipe.id}>
                            <div className="p-1 mx-2">
                                <div className="max-w-[350px] bg-gray-100 pb-2 shadow-xl rounded-t-2xl rounded-b-lg cursor-pointer hover:scale-105 transition ease-in-out duration-300">
                                    <img src={recipe.image} alt={recipe.title} className="bg-cover bg-center w-full rounded-t-2xl" />
                                    <h2 className="text-sm my-2 md:mt-5 md:mb-3 sm:text-md md:text-lg lg:text-xl text-center font-bold mx-2 md:mx-6">{recipe.title}</h2>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}



export default SearchedRecipe