import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul className="flex flex-row justify-end bg-red-400 p-4">
        <li>
          <Link href="/">
            <a className="text-black-500 ml-2">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/register">
            <a className="ml-2">login</a>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <a className="ml-2 mr-2">signin</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
