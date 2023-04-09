import { useState } from "react"
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useLoaderData } from "react-router-dom"

const Recipe = () => {
    const [ingredients, setIndredients] = useState(false);
    const [summary, setSummary] = useState(false);
    const [instructions, setInstructions] = useState(false);
    const recipe = useLoaderData();


    // const getDetails = async () => {
    //     const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_APP_API_KEY}`);
    //     const data = await res.json();
    //     setRecipe(data);
    // }

    // useEffect(() => {
    //     getDetails();
    // }, [id]);

    const handleIngredients = () => {
        setSummary(false);
        setInstructions(false);
        setIndredients(!ingredients);
    }

    const handleSummary = () => {
        setIndredients(false);
        setInstructions(false);
        setSummary(!summary);
    }

    const handleInstructions = () => {
        setSummary(false);
        setIndredients(false);
        setInstructions(!instructions);
    }

    return (
        <div className="">
            <div className="flex flex-col justify-center items-center">
                <div className="p-5 overflow-hidden mx-auto">
                    <img className="rounded-3xl bg-transparent bg-cover" src={recipe?.image} alt={recipe?.title} />
                </div>
                <h2 className="text-xl sm:text-xl md:text-2xl mt-1 mb-6 lg:text-3xl font-extrabold text-center text-black/70">{recipe?.title}</h2>
            </div>
            <div className="mx-10 max-w-[900px] lg:mx-auto p-2 border border-solid rounded-xl mb-5">
                <div className="flex items-center justify-around">
                    <div className="items-center justify-center flex flex-col">
                        <p className="font-bold text-lg md:text-xl text-green-800">{recipe?.readyInMinutes}</p>
                        <span className="text-gray-500 text-md md:text-lg">minutes</span>
                    </div>
                    <div className="items-center justify-center flex flex-col">
                        <p className="font-bold text-lg md:text-xl text-green-800">{recipe?.servings}</p>
                        <span className="text-gray-500 text-md md:text-lg">servings</span>
                    </div>
                </div>

            </div>
            <div className="flex items-center justify-center flex-wrap">
                <button className="p-2 md:text-xl hover:bg-green-900 flex rounded-full px-3 pl-4 text-white items-center m-2 uppercase bg-green-800 font-bold text-md" onClick={handleIngredients}>Ingredients{ingredients ? <FaAngleUp /> : <FaAngleDown />}</button>
                <button className="p-2 md:text-xl hover:bg-green-900 flex rounded-full px-3 pl-4 text-white items-center m-2 uppercase bg-green-800 font-bold text-md" onClick={handleSummary}>Summary{summary ? <FaAngleUp /> : <FaAngleDown />}</button>
                <button className="p-2 md:text-xl hover:bg-green-900 flex rounded-full px-3 pl-4 text-white items-center m-2 uppercase bg-green-800 font-bold text-md" onClick={handleInstructions}>Instructions{instructions ? <FaAngleUp /> : <FaAngleDown />}</button>
            </div>
            <div className="mt-2 max-w-[1000px] mx-auto">
                {recipe?.extendedIngredients.map((ingredient) => {
                    return (
                        <div key={ingredient.id} className={`${ingredients ? "flex" : "hidden"} items-center p-2 mx-5 border-b md:my-2`}>
                            <img className="w-8 md:w-10" src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.name} />
                            <h3 className="flex-1 first-letter:uppercase ml-2 text-lg md:text-xl">{ingredient.name}</h3>
                            <h3 className="text-lg md:text-xl">{Math.round(ingredient.measures.metric.amount)} {ingredient.measures.metric.unitShort}</h3>
                        </div>
                    )
                })}
            </div>
            <div className={`${summary ? "block" : "hidden"} mt-2 mx-5 tracking-wider md:tracking-normal md:text-lg max-w-[1000px] md:mx-auto`}>
                <h3 dangerouslySetInnerHTML={{ __html: recipe?.summary }}></h3>
            </div>
            <div>
                {recipe?.analyzedInstructions.map((instruction) => {
                    return (
                        instruction.steps.map((step) => {
                            return (
                                <div key={step.number} className={`${instructions ? '' : 'hidden'} p-2 mx-5 border-b md:mx-auto md:max-w-[900px]`}>
                                    <h3 className="font-bold text-xl md:text-2xl">
                                        {step.number}.
                                    </h3>
                                    <p className="md:text-lg">{step.step}</p>
                                </div>
                            )
                        })
                    )
                })}
            </div>
        </div>
    )
}

export const detailsLoader = async ({ params }) => {
    const res = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${import.meta.env.VITE_APP_API_KEY}`);
    const data = await res.json();
    return data;

}

export default Recipe