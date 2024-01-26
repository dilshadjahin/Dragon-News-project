
import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";
import {AuthContext} from "../../../Providers/AuthProvider";



const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);
  
  const handleSignOut = () =>{
     logOut()
     .then()
     .catch()
  }
  

  const navlinks = <>
    <NavLink to='/'><li>Home</li></NavLink>
    <NavLink to='/about'><li>About</li></NavLink>
    <NavLink to='/career'><li>Career</li></NavLink>

  </>
  return (
    <div className="max-w-7xl mx-auto navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Dragon News</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 font-semibold">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <div>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>

        {
          user?
            <button onClick={handleSignOut} className="btn btn-ghost">Sign out</button>
            :
            <div className="bg-black text-white rounded px-4">
              <Link to="/login">
                <button className="btn btn-ghost">Login</button>
              </Link>
            </div>

        }

      </div>
    </div>
  );
};

export default Navbar;