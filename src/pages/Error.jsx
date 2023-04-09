import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div className="h-screen max-w-[600px] mx-auto flex items-center justify-start flex-col mt-10">
            <h2 className="text-4xl font-bold mb-10">Page not found!</h2>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ducimus distinctio dicta cupiditate autem quo ea unde, tempora earum eius laborum, nulla rem facilis architecto inventore at quis, fugiat incidunt.</p>
            <p className=" text-gray-600 text-2xl my-10 ">Go to the <Link className="underline hover:text-black" to='/'>Home Page</Link>.</p>
        </div>
    )
}

export default Error