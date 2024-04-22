"use client";
import React from "react";
import products from "@/data/products.json";
import { Product, RootState } from "@/utils/types";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/features/cartSlice";
export default function Home() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const handleButtonClicked = (product: Product) => {
    // We want to toggle this
    const isProductAlreadyInTheCart = cart.find(
      (cartField: Product) => cartField.id === product.id
    );
    if (isProductAlreadyInTheCart) {
      // If the product is already in the cart, we want to remove it
      dispatch(removeFromCart(product.id));
    } else {
      // else, add the product
      dispatch(addToCart(product));
    }
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-10">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Explore Mobiles
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {products.mobile.map((mobile: Product) => (
              <div key={mobile.id} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-contain object-center mb-6"
                    src={mobile.image}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    {mobile.company}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font ">
                    {mobile.name}
                  </h2>
                  <p className="leading-relaxed text-base">
                    ${mobile.price} {mobile.weight}gm
                  </p>
                  <p className="leading-relaxed text-base mb-2">
                    Dimensions:{mobile.dimensions.length}L{" "}
                    {mobile.dimensions.width}W {mobile.dimensions.height}H
                  </p>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm w-full py-2 me-2 mb-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={() => {
                      handleButtonClicked(mobile);
                    }}
                  >
                    {cart.find((product: Product) => product.id === mobile.id)
                      ? "Remove From Cart"
                      : "Add To Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-10">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Explore ACs
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {products.AC.map((ac: Product) => (
              <div key={ac.id} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-contain object-center mb-6"
                    src={ac.image}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    {ac.company}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font ">
                    {ac.name}
                  </h2>
                  <p className="leading-relaxed text-base">
                    ${ac.price} {ac.weight}gm
                  </p>
                  <p className="leading-relaxed text-base mb-2">
                    Dimensions:{ac.dimensions.length}L {ac.dimensions.width}W{" "}
                    {ac.dimensions.height}H
                  </p>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm w-full py-2 me-2 mb-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={() => {
                      handleButtonClicked(ac);
                    }}
                  >
                    {cart.find((product: Product) => product.id === ac.id)
                      ? "Remove From Cart"
                      : "Add To Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-10">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Explore Laptops
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {products.laptop.map((laptop: Product) => (
              <div key={laptop.id} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-contain object-center mb-6"
                    src={laptop.image}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    {laptop.company}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font ">
                    {laptop.name}
                  </h2>
                  <p className="leading-relaxed text-base">
                    ${laptop.price} {laptop.weight}gm
                  </p>
                  <p className="leading-relaxed text-base mb-2">
                    Dimensions:{laptop.dimensions.length}L{" "}
                    {laptop.dimensions.width}W {laptop.dimensions.height}H
                  </p>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm w-full py-2 me-2 mb-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={() => {
                      handleButtonClicked(laptop);
                    }}
                  >
                    {cart.find((product: Product) => product.id === laptop.id)
                      ? "Remove From Cart"
                      : "Add To Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
