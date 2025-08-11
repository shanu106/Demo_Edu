import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";

const Navbar = (props) => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [isListOpen, setListOpen] = useState(false);

  return (
    <div className="w-full bg-[#dee2e6] h-16  z-10 flex items-center justify-between px-5">
      <div className="flex items-center w-1/3 h-full ">
        <button
          onClick={props.toggleDrawer}
          id="btnToggleDrawer"
          className={` px-4 py-2  rounded hover:cursor-pointer`}
        >
          <i className="text-[#495057] ri-menu-line"></i>
        </button>
        <h2 className="ml-5 font-bold text-sm md:text-2xl text-[#495057] font-serif">
          little Kingdom
        </h2>
      </div>
      <div className=" h-full flex  justify-end gap-4 items-center w-full ">
        <div className={`grid z-10   ${isListOpen ? "mt-32" : "mt-0"}`}>
          <Link
            className="md:hidden text-2xl font-semibold"
            onClick={() => {
              setListOpen(!isListOpen);
            }}
          >
            <i className=" ri-arrow-down-s-line "></i> More
          </Link>

          <div
            className={`${
              isListOpen ? "grid" : "hidden"
            } md:flex  bg-[#dee2e6] gap-3 p-4 rounded-2xl text-lg`}
          >
            <Link to="/contact">Contact</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/gallery">Gallery</Link>
          </div>
        </div>

        <button
          onClick={() => {
            setFormOpen(!isFormOpen);
          }}
          onMouseEnter={() => {
            setFormOpen(!isFormOpen);
          }}
          className="cursor-pointer p-2 rounded-xl text-sm bg-[#495057] text-[#dee2e6] w-20 "
        >
          Login
        </button>
      </div>

      <div className="fixed z-10 mt-16">
        <Login isFormOpen={isFormOpen} />
      </div>
      {/* <div className="fixed z-10">
        <Signup isFormOpen={isFormOpen} />
      </div> */}
    </div>
  );
};

export default Navbar;

// [#f8f9fa]
// [#e9ecef]
// [#dee2e6]
// [#ced4da]
// [#adb5bd]
// [#6c757d]
// [#495057]
// [#343a40]
// [#212529]
