import CategoryCard from "./CategoryCard"
import { Link, useLoaderData } from "react-router-dom"
import { useParams } from "react-router-dom";
import SearchField from "./SearchField";

const Category = () => {
    const params = useParams();
    const data = useLoaderData();
    const category = data.results;
    return (
        <div className="">
            <SearchField />
            <CategoryCard />
            <h2 className="text-md sm:text-xl md:text-3xl md:ml-4 font-bold p-6 mt-2">Category: <span className="uppercase underline">{params.category}</span></h2>
            <div className="grid grid-cols-2 mx-auto md:grid-cols-3 max-w-[1200px] gap-3 xl:grid-cols-4">
                {category.map((recipe) => {
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
        </div>

    )
}

export default Category