import { RootState } from "@/utils/types";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <header className="text-gray-600 body-font top-0 sticky bg-white">
      <div className="container mx-auto flex justify-between flex-wrap p-2 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">Cart App</span>
        </Link>

        <div className="inline-flex cursor-pointer items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          <Link href="/cart">
            <img
              className="w-5"
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/cart-2693996-2235912.png?f=webp&w=256"
              alt=""
            />
          </Link>
          <span>{cart.length}</span>
        </div>
      </div>
    </header>
  );
}
