import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <header className="container mx-auto my-4">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="0"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost font-bold text-4xl">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <div className="flex rounded-3xl p-2 border-2 items-center"><IoSearchOutline></IoSearchOutline>     <input className="md:px-5" placeholder="Enter recipe name" type="text" name="" id="" />
                        
                        
                    </div>
                    <div className="text-3xl bg-[rgb(11,229,138)] rounded-full p-2"><CgProfile /> </div>
                </div>
            </div>
        </header>
    );
};

export default Header;