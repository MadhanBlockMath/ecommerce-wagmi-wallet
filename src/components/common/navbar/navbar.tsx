import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/button";
import Navlogo from "../navbar/nav_assets/vikray-logo.svg";
import Profilepic from "@/components/common/navbar/nav_assets/profilePic.png";

import { useAccount, useConnect, useDisconnect } from "wagmi";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const { address, isConnected } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  const formatAddress = (address: string) => {
    return address.slice(0, 6) + "..." + address.slice(-4);
  };

  return (
    <nav className="w-full bg-transparent shadow">
      <div className=" justify-between px-4 mx-auto lg:max-w-[90vw] md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between px-8 py-3 md:py-5 md:block">
            <div>
              <Image src={Navlogo} alt="navlogo" />
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center px-7 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-[4vw] md:space-y-0 ">
              <div className="text-white font-medium hover:text-[#FFFF6D]">
                <Link href="/">Explore</Link>
              </div>
              <div className="text-white font-medium hover:text-[#FFFF6D]">
                <Link href="/store">Store</Link>
              </div>
              <div className="text-white font-medium hover:text-[#FFFF6D]">
                <Link href="/about">About</Link>
              </div>
              <div className="text-white font-medium hover:text-[#FFFF6D]">
                <Link href="/whishlist">Wishlist</Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flex space-x-10 justify-self-center pl-6 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
            }`}
        >
          {isConnected ? (
            <div className="flex items-center justify-center space-x-2">
              <Image
                className="rounded-full w-[50px] h-[50px]"
                src={Profilepic}
                alt="Profile"
              />
              <button
                onClick={() => disconnect()}
                className="flex items-center justify-center bg-[#4f4f4f8a] border border-[#FFFF6D] w-[8rem] h-[4vh] text-white font-medium rounded-xl "
              >
                <div className="px-1">{formatAddress(address as string)}</div>
              </button>
            </div>
          ) : (
            <div className="space-x-4">
              <Button onClick={() => connect({ connector: connectors[0] })} className="text-white border border-[#FFFF6D]">
                LogIn
              </Button>
              <Button filled>Signup</Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
