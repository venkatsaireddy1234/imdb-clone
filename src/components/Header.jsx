import React from "react";
import MenuBar from "./MenuBar";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-between mx-2 sm:mx-auto max-w-6xl py-6">
      <div className="flex ">
        <MenuBar title="HOME" address="/" Icon={AiFillHome} />
        <MenuBar title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-5">
        <Link href="">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 px-1 py-1 rounded-lg mr-1">
              IMDb
            </span>
            <span className="hidden sm:inline text-xl">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
