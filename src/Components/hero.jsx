import { NavLink } from "react-router-dom";
const hero = () => {
    return (
        <div className="hero -mt-20">
            <div className=" text-center">
                <div className="max-w-lg">
                    <h1 className="text-4xl font-bold">Welcome To <span className="bg-300% bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient">ReactRouter</span></h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className="flex gap-5 justify-center items-center">
                        <NavLink to="/blogs" className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                            <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Read Blogs</span>
                        </NavLink>
                        <NavLink to="/bookmarks" className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                            <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Bookmarks</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default hero;