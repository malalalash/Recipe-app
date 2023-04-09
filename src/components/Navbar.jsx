import { NavLink, Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { useState } from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='bg-white sticky top-0 shadow-xl z-40'>
            <nav className="max-w-4xl flex justify-between items-center gap-5 py-1 md:mx-auto">
                <div className="px-5 mx-5 h-fit p-3">
                    <h1 className="h-full text-4xl flex-1 md:text-6xl float-left font-bold text-stone-700 inline-block"><Link to='/'>Recipee</Link></h1>
                </div>

                {/* mobile button */}
                <div className={`md:hidden px-5 items-center justify-center z-10 block relative`}>
                    {nav ? <FiX className="cursor-pointer ml-4 text-white" size={27} onClick={handleNav} /> : <FaBars className="cursor-pointer" size={20} onClick={handleNav} />}
                </div>
                {/* mobile menu */}

                <div className={nav ? "md:hidden z-50 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-200" : "md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen z-50 bg-black text-center ease-in duration-200"}>
                    <div className="flex flex-col">
                        <FiX className="cursor-pointer ml-4 text-white absolute top-0 right-0 m-4 mt-6" size={27} onClick={handleNav} />
                        <Link onClick={handleNav} className="text-white text-4xl m-6 p-1 cursor-pointer hover:text-gray-400 transition duration-300" to='/'>Home</Link>
                        <Link onClick={handleNav} className="text-white text-4xl m-6 p-1 cursor-pointer hover:text-gray-400 transition duration-300" to='about'>About</Link>
                        <Link onClick={handleNav} className="text-white text-4xl m-6 p-1 cursor-pointer hover:text-gray-400 transition duration-300" to='feedback'>Feedback</Link>
                    </div>
                </div>
                {/* desktop menu */}
                <div className="hidden md:flex">
                    <NavLink className={`text-lg p-1 px-5 py-2 rounded-md uppercase text-stone-900 font-medium  hover:text-stone-300 transition duration-200`} to='/'>Home</NavLink>
                    <NavLink className={`text-lg p-1 px-5 py-2 rounded-md uppercase text-stone-900 font-medium hover:text-stone-300 transition duration-200`} to='about'>About</NavLink>
                    <NavLink className={`mr-5 text-lg p-1 px-5 py-2 rounded-md uppercase text-stone-900 font-medium hover:text-stone-300 transition duration-200`} to='feedback'>Feedback</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar