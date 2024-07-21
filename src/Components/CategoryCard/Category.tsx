"use client";
import React from "react";
import { categories } from "../Data/data.js";
export default function Category() {
  return (
    <div className="max-w-[1640px] px-4 py-12">
      <h1 className="text-white font-Pro text-4xl text-center">
        Top Menu item in
        <span className="text-yellow-500 text-5xl underline underline-offset-4">
          —Resturents—
        </span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 mt-8">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-white  p-4 flex justify-between items-center rounded-3xl"
          >
            <h2 className="font-abc sm:text-xl">{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  );
}
