"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import Header from "./Header";
export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Header />
      {children}
    </Provider>
  );
}
