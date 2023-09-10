import { React, useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [navVeritcalVisible, setNavVeritcalVisible] = useState(false);
  return (
    <header className="padding-x py-8 absolute z-20 w-full max-lg:bg-white">
      <nav className="flex justify-between items-center max-container max-lg:flex-col max-lg:items-start max-lg:gap-5">
        <div className="flex justify-between max-lg:w-full">
          <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29} />
          </a>
          <div className="hidden max-lg:block">
            <img
              className="cursor-pointer"
              src={hamburger}
              alt="Hamburger"
              width={25}
              height={25}
              onClick={() => {
                setNavVeritcalVisible(!navVeritcalVisible);
              }}
            />
          </div>
        </div>
        {!navVeritcalVisible && (
          <ul
            className="flex-1 flex justify-center 
        items-center gap-16  max-lg:hidden"
          >
            {navLinks.map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  className="font-monts errat leading-normal
                    text-lg text-slate-gray hover:border-b-coral-red hover:border-b-2"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
        {navVeritcalVisible && (
          <ul className="flex-1 flex max-lg:flex-col w-full">
            {navLinks.map(({ href, label }) => (
              <a
                href={href}
                key={label}
                className="hover:bg-slate-200 cursor-pointer py-3 pl-4 font-monts errat leading-normal
            text-lg text-slate-gray "
              >
                {label}
              </a>
            ))}
          </ul>
        )}
        {/* <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            onClick={() => {
              setNavVeritcalVisible(!navVeritcalVisible);
            }}
          />
        </div> */}
      </nav>
    </header>
  );
};

export default Nav;
