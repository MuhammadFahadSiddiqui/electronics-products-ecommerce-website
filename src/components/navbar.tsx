import Link from "next/link";
import React from "react";
import Image from "next/image";
import { NavigationMenuDemo } from "./navlinks";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-mywhite">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <details>
                  <summary>Products</summary>
                  <ul className="p-2">
                    <li>
                      <Link href={"#"}>Laptop</Link>
                    </li>
                    <li>
                      <Link href={"#"}>Moniter</Link>
                    </li>
                    <li>
                      <Link href={"#"}>CPU</Link>
                    </li>
                    <li>
                      <Link href={"#"}>GPU</Link>
                    </li>
                    <li>
                      <Link href={"#"}>Hard Drive</Link>
                    </li>
                    <li>
                      <Link href={"#"}>Accessories</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href={"#"}>About</Link>
              </li>
              <li>
                <Link href={"#"}>Contact</Link>
              </li>
            </ul>
          </div>
          <Image src="/FS Computers.png" alt="FS Computers" width={200} height={30} />
        </div>
        <div className="navbar-center hidden lg:flex">
          <div>
            <NavigationMenuDemo/>
          </div>
        </div>
        <div className="navbar-end">
          <Link href={"#"} className="btn">
            Button
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
