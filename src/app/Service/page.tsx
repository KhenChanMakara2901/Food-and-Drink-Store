"use client";
import React from "react";
export default function page() {
  return (
    <div className="max-w-[1640px] px-4 py-1">
      <section className="ml-10">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center animate-slide-in">
          <h1 className="text-3xl font-Pro text-yellow-500">— Our Service —</h1>
          <h2 className="text-5xl font-Pro text-white">
            •Explore Our Services•
          </h2>
        </div>
        <div className="flex flex-wrap mx-auto md:flex-nowrap  p-12 animate-slide-in">
          <a href="/">
            <div className="flex w-full">
              <div className="relative flex flex-col items-center m-1 transition duration-300 ease-in-out delay-150 transform bg-gray-950 shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <img
                  className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                  src="https://img.freepik.com/free-photo/confident-young-handsome-cook-chef-uniform-showing-thumbs-up-isolated-white-wall_141793-101126.jpg?t=st=1721304703~exp=1721308303~hmac=05168aca3ea789dfee4a12dbe4e1add700525abb40e048fa8bbe570faebc3506&w=1800"
                  alt="Service"
                />
                <div className="px-6 py-8">
                  <h4 className="mt-4 text-2xl font-semibold text-yellow-500">
                    <span className="font-Pro">Master Chefs</span>
                  </h4>
                  <p className="mt-4 text-base font-Pro text-white leading-relax">
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="/">
            <div className="flex w-full">
              <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-gray-950 shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <img
                  className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                  src="https://thumbs.dreamstime.com/b/good-best-food-icon-logo-design-element-can-be-used-as-as-complement-to-95624271.jpg"
                  alt="Service"
                />
                <div className="px-6 py-8">
                  <h4 className="mt-4 text-2xl font-Pro text-yellow-500">
                    <span>Quality Food</span>
                  </h4>
                  <p className="mt-4 text-base font-Pro text-white leading-relax">
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="/">
            <div className="flex w-full">
              <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-gray-950 shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <img
                  className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                  src="https://www.shutterstock.com/image-vector/shopping-cart-check-mark-icon-600nw-1708233319.jpg"
                  alt="blog"
                />
                <div className="px-6 py-8">
                  <h4 className="mt-4 text-2xl font-semibold text-yellow-500">
                    <span className="font-Pro">Online Order</span>
                  </h4>
                  <p className="mt-4 text-base font-Pro text-white leading-relax">
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className="flex w-full">
              <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-gray-950 shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <img
                  className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                  src="https://img.freepik.com/premium-vector/24-hour-service-iconheadphone-talk-support-phone-consult-customer-problems_68708-3344.jpg"
                  alt="blog"
                />
                <div className="px-6 py-8">
                  <h4 className="mt-4 text-2xl font-Pro text-yellow-500">
                    <span>24/7 Service</span>
                  </h4>
                  <p className="mt-4 text-base font-Pro text-white leading-relax">
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className="flex w-full">
              <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-gray-950 shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <img
                  className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                  src="https://www.statesmanshs.org/wp-content/uploads/2021/02/image1-8.jpg"
                  alt="blog"
                />
                <div className="px-6 py-8">
                  <h4 className="mt-4 text-2xl font-Pro text-yellow-500">
                    <span>Birthday Catering</span>
                  </h4>
                  <p className="mt-4 text-base font-Pro text-white leading-relax">
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
