import React, { createContext, useContext } from "react";
import { Link } from "react-router-dom";
import person from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div>{user && user.email}</div>
      <div className="space-x-2">
        <Link to={"/"}>Home</Link>
        <Link to={"/career"}>Career</Link>
        <Link to={"/about"}>About</Link>
      </div>
      <div>
        <div className="flex items-center gap-1">
          <img src={person} alt="" />
          {
          user && user?.email ? (
            <button onClick={logOut} className="btn btn-neutral rounded-none">
              Log-Out
            </button>
          ) : (
            <Link to="/auth/login" className="btn btn-neutral rounded-none">
              Login
            </Link>
          )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
