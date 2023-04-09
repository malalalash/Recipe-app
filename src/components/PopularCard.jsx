import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom"
import { FaRegClock } from 'react-icons/fa'
import { IoRestaurantOutline } from 'react-icons/io5'
import { Link } from "react-router-dom";

const PopularCard = () => {
    const [data, setData] = useState([]);
    const popular = useLoaderData();

    useEffect(() => {
        setData(JSON.parse(window.localStorage.getItem('popular')));
    }, [popular]);

    return (

        <div className="grid grid-cols-2 mx-auto md:grid-cols-3 max-w-[1200px] gap-2 xl:grid-cols-4">
            {data.map((recipe) => {
                return (
                    <Link key={recipe.id} to={'/recipe/' + recipe.id}>
                        <div className="p-1 mx-2">
                            <div className="max-w-[350px] bg-gray-100 pb-2 shadow-xl rounded-t-2xl rounded-b-lg cursor-pointer hover:scale-105 transition ease-in-out duration-300">
                                <img src={recipe.image} alt={recipe.title} className="bg-cover bg-center w-full rounded-t-2xl" />
                                <h2 className="text-sm border-b-2 my-2 md:mt-5 md:mb-3 sm:text-md md:text-lg lg:text-xl text-center font-bold mx-2 md:mx-6">{recipe.title}</h2>
                                <div className="flex items-center justify-between px-2 flex-row pb-1">
                                    <p className="flex items-center text-sm md:text-lg px-3"><span className="px-1"><FaRegClock size={15} /></span>{recipe.readyInMinutes}m</p>
                                    <p className="flex items-center text-sm md:text-lg px-3"><span className="px-1"><IoRestaurantOutline size={15} /></span>{recipe.servings}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export const popularLoader = async () => {
    if (localStorage.length > 0) {
        return [];
    }
    const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_APP_API_KEY}&number=9`);
    if (!res.ok) {
        throw Error('Could not fetch the recipes');
    }
    const data = await res.json();
    window.localStorage.setItem('popular', JSON.stringify(data.recipes));
    return data.recipes;
}


export default PopularCard