"use client";
import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import Link from "next/link";
export default function Headline() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-Pro text-2xl px-2 pt-4 text-stone-200">
            Sun's Out, BOGO's Out
          </p>
          <p className="px-2 text-stone-200 font-Pro"> Through 8/26</p>
          <Link href="/Menu">
            <button className="border-yellow-900  bg-white text-yellow-800 mx-2 absolute bottom-4 hover:bg-yellow-600 hover:text-gray-900 font-Pro">
              <span>
                <BsFillCartCheckFill size={25} className="ml-5" />
                Order Now
              </span>
            </button>
          </Link>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
          src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="/"
        />
      </div>

      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-Pro text-2xl px-2 pt-4 text-stone-200">
            Cooked Noodles
          </p>
          <p className="px-2 text-stone-200 font-Pro">Meat and Meatballs</p>
          <Link href="/Menu">
            <button className="border-yellow-900 font-Pro  bg-white text-yellow-800 mx-2 absolute bottom-4 hover:bg-yellow-600 hover:text-gray-900">
              <span>
                <BsFillCartCheckFill size={25} className="ml-5" />
                Order Now
              </span>
            </button>
          </Link>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
          src="https://images.pexels.com/photos/1001773/pexels-photo-1001773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-Pro text-2xl px-2 pt-4 text-stone-200">
            Garnish on White Plate
          </p>
          <p className="px-2 text-stone-200 font-Pro">
            Cooked Meat With Vegetable{" "}
          </p>
          <Link href="/Menu">
            <button className="border-yellow-900 font-Pro  bg-white text-yellow-800 mx-2 absolute bottom-4 hover:bg-yellow-600 hover:text-gray-900 text-end">
              <span>
                <BsFillCartCheckFill size={25} className="ml-5" />
                Order Now
              </span>
            </button>
          </Link>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
          src="https://images.pexels.com/photos/1327393/pexels-photo-1327393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-Pro text-2xl px-2 pt-4 text-stone-200">
            Pastry on Plate
          </p>
          <p className="px-2 text-stone-200 font-Pro">Vegetable and sots</p>
          <Link href="/Menu">
            <button className="border-yellow-900 font-Pro  bg-white text-yellow-800 mx-2 absolute bottom-4  hover:bg-yellow-600 hover:text-gray-900">
              <span>
                <BsFillCartCheckFill size={25} className="ml-5" />
                Order Now
              </span>
            </button>
          </Link>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
          src="https://images.pexels.com/photos/2122280/pexels-photo-2122280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-Pro text-2xl px-2 pt-4 text-stone-200">
            Vegetable Salad With Meat
          </p>
          <p className="px-2 text-stone-200 font-Pro">Squid and Vegetables </p>
          <Link href="/Menu">
            <button className="border-yellow-900 font-Pro  bg-white text-yellow-800 mx-2 absolute bottom-4 hover:bg-yellow-600 hover:text-gray-900">
              <span>
                <BsFillCartCheckFill size={25} className="ml-5" />
                Order Now
              </span>
            </button>
          </Link>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
          src="https://images.pexels.com/photos/2059152/pexels-photo-2059152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-Pro text-2xl px-2 pt-4 text-stone-200">
            Vegetable Salad With Meat
          </p>
          <p className="px-2 font-Pro  text-stone-200">Squid and Vegetables </p>
          <Link href="/Menu">
            <button className="border-yellow-900 font-Pro   bg-white text-yellow-800 mx-2 absolute bottom-4 hover:bg-yellow-600 hover:text-gray-900">
              <span>
                <BsFillCartCheckFill size={25} className="ml-5" />
                Order Now
              </span>
            </button>
          </Link>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
          src="https://images.pexels.com/photos/792026/pexels-photo-792026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="/"
        />
      </div>
    </div>
  );
}
