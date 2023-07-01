'use client'

import Link from 'next/link';
import React from "react";
import Image from "next/image";

import logo from "../../../../public/logo.jpg"

const NavHeader: React.FunctionComponent = () => {
    return (
        <header className="bg-white w-full">
            <div className="mx-auto max-w-screen-xl p-2">
                <div className="flex items-center justify-between gap-4 lg:gap-10">
                    <div className="flex lg:w-0 lg:flex-1">
                        <Link href="/">
                            <Image src={ logo } alt={'Logo'} width={50} height={50}></Image>
                        </Link>
                    </div>
                    <nav className="hidden gap-8 text-sm font-medium md:flex">
                        <a className="text-gray-500" href="">Download</a>
                        <a className="text-gray-500" href="">Contact</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default NavHeader;