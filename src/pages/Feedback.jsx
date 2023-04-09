const Feedback = () => {
    return (

        <div className="w-full h-screen bg-feedback">
            <div className="bg-black/70 relative w-[300px] sm:w-[400px] h-[340px] sm:h-[360px] md:h-[395px] md:w-[600px] mx-auto transform translate-y-10 p-5 rounded-xl">
                <div className=" text-gray-100">
                    <div className="border-b border-b-red-500">
                        <h2 className=" text-2xl sm:text-3xl md:text-4xl font-semibold">Leave Us Feedback</h2>
                        <p className="text-sm sm:text-base md:text-xl font-semibold">What can we improve?</p>
                    </div>
                    <div className="form-control w-full max-w-xl mt-1">
                        <p className="text-sm sm:text-base md:my-3 my-2 md:text-xl font-semibold mb-1">Your name:</p>
                        <input required type="text" placeholder="Enter name" className="input text-black input-bordered w-full md:text-lg" />
                        <p className="text-sm sm:text-base md:my-3 my-2 md:text-xl font-semibold mb-1">Enter message:</p>
                        <textarea required className="textarea md:text-lg text-black textarea-bordered" placeholder="Enter your message..."></textarea>
                        <button className="btn btn-primary w-full mx-auto mt-3">Send My Feedback</button>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Feedback