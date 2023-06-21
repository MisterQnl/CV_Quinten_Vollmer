'use client'

import Link from 'next/link';
import React from "react";
import Image from "next/image";

const NavHeader: React.FunctionComponent = () => {
    return (
        <header className="bg-white w-full">
            <div className="mx-auto max-w-screen-xl p-2">
                <div className="flex items-center justify-between gap-4 lg:gap-10">
                    <div className="flex lg:w-0 lg:flex-1">
                        <Link href="/">
                            <Image src={'/favicon.ico'} alt={'Logo'} width={50} height={50}></Image>
                        </Link>
                    </div>

                    <nav className="hidden gap-8 text-sm font-medium md:flex">
                        <a className="text-gray-500" href="">Download</a>
                        <a className="text-gray-500" href="">Contact</a>
                    </nav>

                    <div className="lg:hidden">
                        <button className="rounded-lg bg-gray-100 p-2 text-gray-600" type="button">
                            <span className="sr-only">Open menu</span>
                            <svg
                                aria-hidden="true"
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4 6h16M4 12h16M4 18h16"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavHeader;