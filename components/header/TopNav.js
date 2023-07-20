import React from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { signIn, signOut, useSession } from "next-auth/react";

import { ShoppingCartIcon } from "@heroicons/react/outline";
function TopNav() {
  const { data: session } = useSession();
  const handleSubmit = async (e) => {
    !session ? signIn() : signOut();
  };
  return (
    <div className="flex items-center bg-amazon_blue-light p-1 flex-grow py-2">
      <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
        <Image
          src="https://links.papareact.com/f90"
          width={150}
          height={40}
          objectFit="contain"
          className="cursor-pointer"
          alt=""
        />
      </div>
      <SearchBar />
      {/* RIght side of top */}
      <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
        <div onClick={handleSubmit} className="cursor-pointer link">
          <p className="hover:underline">
            {session ? `Hello, ${session.user.name}` : "Sign In"}
          </p>
          <p className="font-extrabold md:text-sm">Account & Lists</p>
        </div>
        <div className="link">
          <p>Returns</p>
          <p className="font-extrabold md:text-sm">& Orders</p>
        </div>
        <div className="relative link flex items-center">
          <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
            0
          </span>
          <ShoppingCartIcon className="h-10" />
          <p className="hidden md:inline font-extrabold md:text-sm mt-2">
            Basket
          </p>
        </div>
      </div>
    </div>
  );
}
export default TopNav;
