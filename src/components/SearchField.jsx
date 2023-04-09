import { FiSearch } from "react-icons/fi"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
const SearchField = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/search/' + search)
        setSearch("");
    }


    return (
        <div className="flex items-center justify-center md:h-32  mx-auto bg-custom bg-center bg-cover shadow-lg">
            <form onSubmit={handleSubmit}>
                <div className="flex items-center">
                    <FiSearch size={20} className="absolute mx-4 pointer-events-none" />
                    <input
                        onChange={handleChange}
                        value={search}
                        type="text"
                        required
                        placeholder="Search for recipe..."
                        className="border focus:ring-stone-800 focus:border-stone-800 border-solid border-black/70 rounded-full my-5 md:w-[400px] p-2 py-2 md:py-3 md:text-lg pl-12 xl:w-[600px] bg-white" />
                </div>
            </form>

        </div>
    )
}

export default SearchField