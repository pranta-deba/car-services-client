import { BsCart4 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import logo from "../assets/logo2.svg"
import { Link } from "react-router-dom";

const Navbar = () => {
    const nav_item = <>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Services</a></li>
        <li><a>Blog</a></li>
        <li><a>Contact</a></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-semibold text-[#444]">
                        {nav_item}
                    </ul>
                </div>
                <Link to={"/"} className="text-xl flex flex-col justify-center items-center text-ellipsis">
                    <img src={logo} alt="" className="w-12" />
                    <h3 className="text-xs md:text-xl font-bold">Car Services</h3>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold text-[#444]">
                    {nav_item}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <a className="text-2xl hover:text-[#FF3811] cursor-pointer"><BsCart4 /></a>
                <a className="text-2xl hover:text-[#FF3811] cursor-pointer"><IoSearchOutline /></a>
                <a className="btn border-2 border-[#FF3811] text-[#FF3811]  bg-transparent hover:bg-[#FF3811] hover:text-white text-lg font-semibold">Appointment</a>
            </div>
        </div>
    );
};

export default Navbar;