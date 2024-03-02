'use client'
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import React, { useState, useEffect } from 'react';
import 'flowbite';
import { HiOutlineUserGroup, HiUserGroup, HiAcademicCap, HiOutlineAcademicCap } from "react-icons/hi2";
import { GoHome, GoHomeFill } from "react-icons/go";
import { MdOutlineQuiz, MdQuiz } from "react-icons/md";
import Link from 'next/link';
import { SiAboutdotme } from "react-icons/si";
import { usePathname } from 'next/navigation';
import { IoCarSportOutline, IoCarSport, IoPersonCircleOutline, IoPersonCircleSharp } from "react-icons/io5";

function Footer() {
    const links = [
        {
            href: "/",
            activeIcon: <GoHomeFill className="w-5 h-5" />,
            icon: <GoHome className="w-5 h-5" />,
            label: "หน้าหลัก"
        },
        {
            href: "/reserve/resultreserve",
            activeIcon: <HiUserGroup className="w-5 h-5" />,
            icon: <HiOutlineUserGroup className="w-5 h-5" />,
            label: "ประวิติการจอง"
        },
        {
            href: "/car",
            activeIcon: <IoCarSport className="w-5 h-5" />,
            icon: <IoCarSportOutline className="w-5 h-5" />,
            label: "ยานพาหนะ"
        },
        {
            href: "/driver",
            activeIcon: <IoPersonCircleSharp className="w-5 h-5" />,
            icon: <IoPersonCircleOutline className="w-5 h-5" />,
            label: "พนักงานขับรถ"
        },
        {
            href: "/news",
            activeIcon: <MdQuiz className="w-5 h-5" />,
            icon: <MdOutlineQuiz className="w-5 h-5" />,
            label: "ข่าวสาร"
        },
    ];

    return (
        <div className="bg-gray-100">
            <div className='max-w-screen-xl mx-auto py-10 max-xl:px-4'>
                <h3 className='text-5xl mb-8'>ตรวจสอบการจองของคุณ</h3>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3 justify-between'>
                    <div className="">
                        <input
                            type="text"
                            id=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="* กรอกหมายเลขการจอง"

                        />
                    </div>
                    <div className="">
                        <input
                            type="text"
                            id=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="* กรอกชื่อ"

                        />
                    </div>
                    <div className="">
                        <Link href="/reserve/resultreserve/1">
                            <button
                                type="button"
                                id=""
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-24 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                            >ยืนยัน
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
            <div className="bg-gray-100 py-8">
                <div className="mx-auto max-w-screen-xl text-center">
                    <Link href="/" className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
                        <img src="/logo.png" className="h-8" alt="Logo" />
                        <span className="self-center text-2xl whitespace-nowrap dark:text-white font-bold">DRIVECP</span>
                    </Link>
                    <p className="my-6 text-gray-500 dark:text-gray-400">จองยานพาหนะ จาก วิทยาลัยการคอมพิวเตอร์ มข.</p>
                    <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white gap-4">
                        {links.map((link, index) => (
                            <li key={index} className="items-center justify-center flex">
                                <Link href={link.href}>
                                    <div className="hover:underline">{link.label}</div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">DRIVECP™</a>. All Rights Reserved.</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;