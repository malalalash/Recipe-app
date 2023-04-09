const About = () => {
    return (
        <div className="grid grid-cols-1 h-screen sm:m-0 sm:grid-cols-2">
            <div className="bg-about w-full h-full bg-cover"></div>
            <div className="p-4 sm:flex sm:items-center sm:justify-center sm:flex-col">
                <h2 className="text-2xl sm:mb-5 sm:text-4xl font-bold">About Us</h2>
                <p className="text-lg sm:mx-5 mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus accusamus assumenda nisi ratione magni eligendi totam nobis sunt? Quos cupiditate suscipit porro? Labore libero odio fugit, molestias ullam veniam iste.</p>
                <p className="text-lg sm:mx-5 border-b-2 border-b-red-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nesciunt velit tempore accusantium iure optio, dignissimos eum dolore minus culpa debitis? Illum, quae a ipsa reprehenderit officiis placeat eius provident.</p>

            </div>

        </div>
    )
}

export default About