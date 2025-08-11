import React from "react";
import KM from "../../../assets/KM.png";

const Navbar = () => {
  return (
    <div>
      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={KM} className="w-30 md:w-40" alt="" />
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              class="text-white bg-[#DC2626] hover:bg-[#d30707]  transition-all duration-200 font-medium rounded-lg text-sm px-1 md:px-4 py-1 md:py-2 text-center "
            >
              <a href="my_cv_old.pdf" download>
                Download CV
              </a>
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden   text-gray-400 hover:bg-gray-700 "
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-semibold border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
                <a
                  href="#"
                  class="block  py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#d30707] md:p-0 transition-all duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block  py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#d30707] md:p-0 transition-all duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block  py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#d30707] md:p-0 transition-all duration-200"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block  py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#d30707] md:p-0 transition-all duration-200"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block  py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#d30707] md:p-0 transition-all duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block  py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#d30707] md:p-0 transition-all duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
