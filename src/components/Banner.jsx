import banner from "../assets/banner.jpg";


const Banner = () => {
    return (
        <div className="container mx-auto
 my-6 bg-cover h-screen bg-no-repeat rounded-3xl md:w-full  md:h-[35.5rem]" style={{ backgroundImage:`url(${banner})`}} >
            <div className="w-3/4 mx-auto text-center space-y-6 py-6 h-full flex flex-col justify-center items-center">
                <h2 className="text-3xl md:text-5xl text-white font-bold">Discover an exceptional cooking class tailored for you!</h2>
                <p className="text-md text-white">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div>
                    <button className="btn rounded-full font-semibold px-4 mr-4 bg-[rgb(11,229,138)]">Explore Now</button>
                    <button className="btn rounded-full text-gray-200 bg-transparent font-semibold px-4">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;