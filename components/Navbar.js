import { useState } from "react";
import { links } from "../constants/links";

export default function Navbar() {
  const [showLink, setShowLink] = useState(false);

  const toggleLink = () => {
    setShowLink(!showLink);
  };

  return (
    <nav className="mb-[72px]">
      <div className="mx-auto p-4">
        <div className="flex items-center justify-between">
          {/* Hamburger menu */}
          <div className="lg:hidden">
            <button
              onClick={toggleLink}
              className="transition-all duration-500 ease-in-out rotate-180"
            >
              {!showLink ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transition-all origin-center rotate-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transition-all origin-center rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          <a className="text-gray-800 font-bold text-2xl lg:text-4xl uppercase">
            Profile
          </a>

          <div className="flex flex-row items-center space-x-8">
            <div className="hidden lg:flex lg:flex-row lg:items-center lg:space-x-4">
              {links?.map((item) => {
                return (
                  <a
                    key={item.id}
                    className="font-body font-normal text-gray-500 hover:font-medium text-base leading-6 hover:text-indigo-600 capitalize cursor-pointer hover:underline hover:underline-offset-8 decoration-indigo-600 transition ease-in-out duration-300 hover:-translate-y-1 hover:duration-300 motion-safe:transition-none motion-reduce:transition-none"
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            !showLink ? "hidden" : "flex flex-col"
          } w-full my-4 lg:hidden`}
        >
          {links?.map((item) => {
            return (
              <a
                key={item.id}
                onClick={toggleLink}
                className="py-4 font-body font-normal text-gray-500 hover:font-medium text-base leading-6 hover:text-indigo-600 capitalize cursor-pointer border-b hover:underline hover:underline-offset-8 transition-all ease-in-out hover:translate-x-2 duration-150 hover:duration-150 motion-safe:transition-none motion-reduce:transition-none"
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
