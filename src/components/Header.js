import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
// import components
import { FiSearch } from "react-icons/fi";
import Nav from "../components/Nav";
import NavMobile from "./NavMobile";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  const [showModal, setShowModal] = React.useState(false);

  return (
    <header
      className={`${
        bg ? "bg-primary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-40 flex items-center justify-between">
        <div>
          <ul className="text-white hover:text-accent cursor-pointer">
            <FiSearch onClick={() => setShowModal(true)} />
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-sm">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-primary outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold items-center">
                          Search Song
                        </h3>
                        <FiX onClick={() => setShowModal(false)} />
                      </div>
                      {/*body*/}
                      <div className="relative p-5 flex-initial">
                        <form className="space-y-8 w-full max-w-[780px]">
                          <div className="flex gap-1">
                            <input
                              className="input"
                              type="text"
                              placeholder="....."
                            />
                            <button
                              className="btn btn-lg bg-primary hover:bg-secondary"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Search
                            </button>
                          </div>
                        </form>
                      </div>
                      {/*footer*/}
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </ul>
        </div>
        <div className="items-center">
          <a href="#">
            <ul className="text-white text-xl hover:text-accent">優里</ul>
          </a>
        </div>
        <div className="hidden lg:block">
          <Nav />
        </div>
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
