import { FaChevronRight } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'
import { categories } from '../data/Categories'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';



const CategoryCard = () => {
    const [category, setCategory] = useState('');
    const navigate = useNavigate();

    const handleCategory = (e) => {
        setCategory(e.target.innerText);
        navigate('/category/' + e.target.innerText);
    }

    const slideLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 650;
    }

    const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 650;
    }

    return (
        <>
            <h2 className="text-xl md:text-3xl font-bold p-6 ml-6 mt-2">Categories</h2>
            <div className={`flex items-center mx-5`}>
                <FaChevronLeft onClick={slideLeft} className='cursor-pointer opacity-50 hover:opacity-100 hidden sm:block mx-5' />
                <div id="slider" className={`w-full z-0 h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide`}>
                    {categories.map((category) => {
                        return (

                            <div key={category.id} onClick={handleCategory} className="mx-3 bg-slate-300 h-[100px] w-[100px] shadow-md sm:h-[200px] sm:w-[200px] inline-block rounded-lg overflow-hidden cursor-pointer mt-2 hover:scale-105 transistion ease-in-out duration-300">
                                <div className='w-full h-full flex items-end justify-center  relative pointer-events-none'>
                                    <img className='w-full h-full object-cover pointer-events-none ' src={category.img} alt="" />
                                    <span className='text-sm pointer-events-none sm:text-base absolute sm:tracking-wider mb-3 bg-black/80 p-1 rounded-full px-2 text-white first-letter:uppercase font-semibold'>{category.category}</span>
                                </div>
                            </div>

                        )
                    })}

                </div>
                <FaChevronRight onClick={slideRight} className='cursor-pointer opacity-50 hover:opacity-100 hidden sm:block mx-5' />
            </div>
        </>)
}

export const categoryLoader = async ({ params }) => {

    const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_APP_API_KEY}&type=${params.category}&number=9`)
    if (!res.ok) {
        throw Error('Something went wrong');
    }
    const data = await res.json();
    return data;
}

export default CategoryCard