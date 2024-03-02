'use client'
import React, { useState, useEffect } from 'react';
import 'flowbite';
import { HiOutlineUserGroup, HiUserGroup, HiAcademicCap, HiOutlineAcademicCap } from "react-icons/hi2";
import { GoHome, GoHomeFill } from "react-icons/go";
import { MdOutlineQuiz, MdQuiz } from "react-icons/md";
import Link from 'next/link';
import { SiAboutdotme } from "react-icons/si";
import { usePathname } from 'next/navigation';
import { IoCarSportOutline, IoCarSport, IoPersonCircleOutline, IoPersonCircleSharp } from "react-icons/io5";

const NavberAdmin = () => {
    const links = [
        {
            href: "/admin",
            activeIcon: <GoHomeFill className="w-5 h-5" />,
            icon: <GoHome className="w-5 h-5" />,
            label: "หน้าหลัก"
        },
        {
            href: "/admin/driver",
            activeIcon: <IoPersonCircleSharp className="w-5 h-5" />,
            icon: <IoPersonCircleOutline className="w-5 h-5" />,
            label: "พนักงานขับรถ"
        },
        {
            href: "/admin/categories",
            activeIcon: <IoCarSport className="w-5 h-5" />,
            icon: <IoCarSportOutline className="w-5 h-5" />,
            label: "ประเภทรถ"
        },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const url = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // const isAdmin = url === "/admin" || "/admin/categories" || "/admin/driver";

    return (
        <div className={`bg-white shadow-md border-gray-200 dark:bg-gray-900 fixed top-0 w-full transition-all duration-300 z-50 ${isScrolled ? 'shadow-lg' : ''}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 max-xl:p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/logo.png" className="h-8" alt="Logo" />
                    <span className="self-center text-2xl whitespace-nowrap dark:text-white font-bold">DRIVECP</span>
                </Link>
                <div className='flex items-center lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse'>
                    <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full" src="/user.jpg" alt="user photo" />
                    </button>
                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900 dark:text-white">Pubes Komutiban</span>
                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">pubes.k@kkumail.com</span>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">User</Link>
                            </li>
                            <li>
                                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
                            </li>
                        </ul>
                    </div>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="navbar-default">
                    <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href} className={`${url == link.href ? " text-blue-500" : "text-gray-900 hover:text-blue-500"} py-3 px-3 flex items-center rounded-lg `}>
                                    {url == link.href ?
                                        <>{link.activeIcon}</>
                                        :
                                        <>{link.icon}</>
                                    }
                                    <span className="ml-3 text-xl">{link.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavberAdmin