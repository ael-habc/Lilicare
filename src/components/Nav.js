import React from "react";
import logo from '../Assets/images/logo.png'

export default function Nav() {
  return (
    <nav  className="flex w-full p-4 pl-8 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
      <img src={logo} alt="logo" />
    </nav>
  );
}
