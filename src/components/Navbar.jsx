import React from "react";
import { BiCoffeeTogo } from "react-icons/bi";

function Navbar() {
  return (
    <div className="w-full flex items-center justify-between py-6">
      <div className="flex items-center text-sm w-6/12">
        <ul className="flex items-center border border-gray rounded-full pr-3 py-1">
          <h3 className="text-md bg-gray text-dark rounded-full px-3 py-px ml-1 mr-3">
            Aun Shahbaz Awan
          </h3>
          <li className="inline pr-5">• LOWERT DFGH</li>
          <li className="inline pr-5">• LOWERT DFGH</li>
          <li className="inline pr-5">• LOWERT DFGH</li>
          <li className="inline pr-5">• LOWERT DFGH</li>
        </ul>
      </div>
      <div className="w-3/12 flex justify-end">
        <button className="flex items-center bg-gray text-dark px-3 py-1 hover:scale-105 transition-all">
          <BiCoffeeTogo className="mr-2 " />
          Buy Me a Coffee
        </button>
      </div>
    </div>
  );
}

export default Navbar;
