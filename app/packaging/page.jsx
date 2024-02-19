import Image from "next/image";
import React from "react";
// import logo from "/public/images/logo_full_gray.svg";
import box1 from "/public/images/Box1.png";
import avatar from "/public/Images/avatar.jpg";
import Link from "next/link";
import Product from "@/components/Product";
import bag from "/public/Images/bag.png";
import cosmetic from "/public/Images/cosmetic.png";
import cosmetic2 from "/public/Images/cosmetic2.png";
import { GoArrowUpRight } from "react-icons/go";
import gift from "/public/Images/gift.png";
import sidebox from "/public/Images/sidebox.png"
// import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div>
      {/* <header>
        <nav
          id="navbar"
          className="navbar visible fixed top-0 left-0 flex items-center justify-between gap-[20px] w-full h-[72px] transition duration-300 pl-5 pr-5 sm:pl-10 sm:pr-10 md:pl-24 md:pr-24 z-50 backdrop-filter backdrop-blur-lg bg-opacity-50"
        >
          <div className="logo_animation">
            <div className="header_logo flex gap-2 justify-center items-center ">
              <Image
                className="w-[100px]"
                width={100}
                height={50}
                src={logo}
                alt=""
              ></Image>
            </div>
          </div>
          <div className="nav_items menu-bar sm:flex items-center gap-8 text-md hidden">
            <ul className="nav_items sm:flex items-center gap-8 text-md hidden">
              <li>
                <a
                  className="nav__links  text-gray-500 h-[72px] grid place-items-center hover:text-[#1265D7] transition-all duration-200"
                  href=""
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="nav__links text-gray-500 h-[72px] grid place-items-center hover:text-[#1265D7] transition-all duration-200"
                  href="/printing"
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  className="nav__links text-gray-500 h-[72px] grid place-items-center hover:text-[#1265D7] transition-all duration-200"
                  href=""
                >
                  Contact Us
                </a>
              </li>
              <a
                className="button-58 transition duration-300 p-2 w-max rounded-full text-xs px-4 text-white"
                href=""
              >
                <span className="text-btn">Let's Talk</span>
                <span>Let's Talk</span>
              </a>
            </ul>
          </div>
          <div className="menu sm:hidden">
            <button
              className="nav-tgl"
              id="nav-tgl"
              type="button"
              aria-label="toggle menu"
            >
              <span aria-hidden="true"></span>
            </button>
            <nav className="nav">
              <div
                className="side_viewer flex text-white justify-center items-center text-4xl"
                id="side_viewer"
              >
                <ul className="flex flex-col gap-6">
                  <li className="link">About</li>
                  <li className="link">Works</li>
                  <li className="link">Contact Us</li>
                  <li className="link">Lets Talk</li>
                </ul>
              </div>
            </nav>
          </div>
        </nav>
      </header> */}
      <section className="bg-black pt-40">
        <div className="max-w-screen-xl mx-auto px-12 py-10">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="flex flex-col gap-5">
              <h1 className="text-[#fff] text-[50px] lg:text-[110px] font-semibold leading-[100.523%]">
                Packaging
              </h1>
              <p className="text-[#fff] text-[16px] lg:text-[22px] font-normal leading-[160.523%] w-auto lg:w-[506px]">
                Imprint printing press is the foremost provider of varied offset
                printing solutions to more than a thousand clients today..
              </p>
            </div>
            <div>
              <Image src={box1}></Image>
            </div>
          </div>
          <div className="flex justify-between pt-12">
            <div className="flex items-center gap-5 lg:gap-11">
              <div className="-space-x-4">
                <Image
                  className="relative z-30 inline object-cover w-[40px] h-[40px] lg:w-[68px] lg:h-[68px] border-[6px] border-white rounded-full"
                  src={avatar}
                  alt="Profileimage"
                ></Image>
                <Image
                  className="relative z-30 inline object-cover w-[40px] h-[40px] lg:w-[68px] lg:h-[68px] border-[6px] border-white rounded-full"
                  src={avatar}
                  alt="Profileimage"
                ></Image>
                <Image
                  className="relative z-30 inline object-cover w-[40px] h-[40px] lg:w-[68px] lg:h-[68px] border-[6px] border-white rounded-full"
                  src={avatar}
                  alt="Profileimage"
                ></Image>
              </div>
              <div>
                <p className="text-[#fff] text-[12px] lg:text-[18px] font-bold">
                  15,000+
                </p>
                <p className="text-[#28AAE3] text-[12px] lg:text-[18px] font-medium">
                  Satisfied client
                </p>
              </div>
            </div>
            <div>
              <button className="text-[#28AAE3] text-[14px] lg:text-[22px] font-normal underline">
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>
      <Product />
      <section className="bg-black pt-28 h-[100%] relative">
        <div className="max-w-screen-xl mx-auto px-12">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 items-center">
            <div className="w-auto h-auto lg:w-[240px] lg:h-[150px] overflow-hidden ">
              <Image
                className="w-[100%] h-[100%] object-cover object-center"
                src={cosmetic}
              ></Image>
            </div>
            <div>
              <p className="text-white text-[20px] lg:text-[26px] font-medium">
                Make <span className="text-[#28AAE3]">Your Own Choice</span>{" "}
                <br /> With Us _____
              </p>
            </div>
          </div>
          <div className="w-[400px] h-[300px] lg:w-[502px] lg:h-[402px] absolute overflow-hidden right-0 top-[420px] lg:top-24 hidden md:block">
            <Image
              className="w-[100%] h-[100%] object-cover object-center"
              src={bag}
            ></Image>
          </div>
          <div className="pt-14 md:pt-24">
            <p className="text-[#28AAE3] text-[50px] lg:text-[120px] font-bold flex flex-col leading-none">
              Cosmetic{" "}
            </p>
            <div className="flex flex-col lg:flex-row gap-3 pt-5 lg:pt-0 lg:gap-10">
              <div className="flex items-center">
                <button className="flex gap-2 text-[20px] items-center text-[#fff] rounded-[42px] border border-[#F5F5F5] px-5 py-3">
                  Order now <GoArrowUpRight className="text-[26px]" />
                </button>
              </div>
              <p className="text-[#fff] text-[40px] lg:text-[100px] font-light">
                Packaging
              </p>{" "}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between pt-10 md:pt-28 lg:pt-28 items-center">
            <div>
              <Image src={cosmetic2}></Image>
            </div>
            <div className="flex flex-col gap-10">
              <p className="text-[#fff] w-auto lg:w-[500px] text-[20px] lg:text-[23px] font-normal leading-normal lg:leading-[36px]">
                Imprint printing press is the foremost provider of varied offset
                printing solutions to more than a thousand clients today..
              </p>

              <div className="flex justify-center lg:justify-between">
                <p>.</p>
                <Link
                  href="#"
                  className="text-[#28AAE3] text-[14px] lg:text-[22px] font-normal underline"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl mx-auto px-12 py-20">
          <div className="flex flex-col justify-between gap-1 lg:gap-20 text-center lg:text-start lg:flex-row">
            <div class="flex flex-col justify-center gap-5 md:basis-2/5 md:min-w-2/5 md:m-0 lg:basis-1/2 lg:min-w-1/2 lg:m-0">
              <h1 class="mt-16 text-[50px] lg:text-[120px] lg:mt-0 text-[#0092D1] font-bold leading-none flex flex-col">
                Gift
                <span className="text-[40px] lg:text-[100px] font-light text-[#000]">
                  Packaging{" "}
                </span>
              </h1>
              <p class="text-[16px] lg:text-[22px] font-normal">
                Imprint printing press is the foremost provider of varied offset
                printing solutions to more than a thousand clients today..
              </p>
              <Link
                className="button-58 transition duration-300 p-2 w-max rounded-full text-xs px-4 text-white"
                href=""
              >
                <span className="text-btn">Order Now</span>
                <span>Order Now</span>
              </Link>
            </div>
            <div class="md:basis-2/5 md:min-w-2/5 md:m-0 lg:basis-1/2 lg:min-w-1/2 lg:m-0 overflow-hidden h-full md:h-[450px]">
              <Image
                className="w-[100%] h-[100%] object-cover object-center"
                src={gift}
              ></Image>
            </div>
          </div>
          <div className="w-full h-full overflow-hidden pt-10 relative">
            <Image className="w-[100%] h-[100%] object-cover object-center" src={sidebox}></Image>
            <div className="absolute top-72 right-20 w-[400px]">
              <p className="text-[#111] text-[22px] font-normal leading-[36px]">Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today..</p>
            </div>
            <div className="absolute bottom-20 left-20">
              <button className="text-[#111] text-[22px] lg:text-[22px] font-normal underline">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </div>
  );
}