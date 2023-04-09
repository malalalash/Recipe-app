import Category from "../components/Category"
import CategoryCard from "../components/CategoryCard"
import Popular from "../components/Popular"
import SearchField from "../components/SearchField"

const Home = () => {
    return (
        <div className="bg-gray-100">
            <SearchField />
            <CategoryCard />
            <Popular />
        </div>
    )
}

export default Home