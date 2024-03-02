'use client'
import '../css/hero.css';
import React, { useEffect, useState } from 'react';
import { Input } from "@nextui-org/react";
import { IoLocationOutline } from "react-icons/io5";
import { LuCalendar, LuCalendarCheck2 } from "react-icons/lu";
import { FcCancel, FcClock, FcOnlineSupport, FcOk } from "react-icons/fc";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { Footer, Carousels } from '@/app/components'
import Link from 'next/link';
import { motion } from "framer-motion";
import { Button } from '@mui/material';

const Hero = () => {
    const [scrolled, setScrolled] = useState(0);
    const [reserveDate, setSelectedDate] = useState('');
    const [reserveLocation, setSelectedLocation] = useState('');
    const [reserveReturn, setSelectedReturn] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const calculateHeroTop = () => {
        return -(scrolled * 0.0315) + 'rem';
    };

    const calculateH1Top = () => {
        return -(scrolled * -0.005) + 'rem';
    };

    const calculateH1Opacity = () => {
        return 1 - (scrolled * 0.00175);
    };
    const handleSave = () => {
        const value = {
            reserveDate,
            reserveLocation,
            reserveReturn
        };

        localStorage.setItem("reserve", JSON.stringify(value));
    };
    return (
        <>
            <section className="hero" style={{ top: calculateHeroTop() }}>
                <div className='hero-content flex justify-center items-center flex-col' style={{ top: calculateH1Top(), opacity: calculateH1Opacity() }}>
                    <h1 className='text-white text-5xl mb-5'>เริ่มต้นการจองยานพาหนะ</h1>
                    <p className='text-gray-200 text-xl mb-10'>จาก วิทยาลัยการคอมพิวเตอร์ มข.</p>
                    <form action="" className='grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-1 max-xl:grid-cols-1  justify-items-stretch items-center max-md:m-10 bg-white border-1 rounded-2xl p-5 '>
                        <div className="relative">
                            <p className='pb-3'>สถานที่รับ</p>
                            <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none mt-9">
                                <IoLocationOutline />
                            </div>
                            <input
                                value={reserveLocation}
                                onChange={(e) => setSelectedLocation(e.target.value)}
                                type="text"
                                id=""
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="โปรดเลือกสถานที่รับ"

                            />
                        </div>
                        <div className='flex justify-center items-center my-4 col-span-2 max-md:col-span-3 xl:mx-0'>
                            <div className="relative">
                                <p className='pb-3'>วันเดินทาง</p>
                                {/* <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none mt-9">
                                    <LuCalendar />
                                </div> */}
                                <input
                                    value={reserveDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    type="date"
                                    id=""
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-64 ps-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div className="relative">
                                <p className='pb-3'>วันกลับ</p>
                                {/* <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none mt-9">
                                    <LuCalendarCheck2 />
                                </div> */}
                                <input
                                    value={reserveReturn}
                                    onChange={(e) => setSelectedReturn(e.target.value)}
                                    type="date"
                                    id=""
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-64 ps-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <p className='pb-3 invisible invi'>s</p>
                            <button onClick={handleSave} className='w-full'>
                                <Link href="/reserve">
                                    <div className="text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-10 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full" >ยืนยัน</div>
                                </Link>
                            </button>
                        </div>
                    </form>
                </div>
                <div className='flex justify-center items-center'>
                    <MdKeyboardDoubleArrowDown
                        size={50}
                        color='white'
                        className='animate-bounce w-50 h-50 mt-10 cursor-pointer'
                        onClick={() => {
                            const contentSection = document.getElementById('contentSection');
                            contentSection.scrollIntoView({ behavior: 'smooth' });
                        }} />
                </div>
            </section>
            <section className="content fixed w-full " id="contentSection">
                <div className='max-w-screen-xl mx-auto p-4 my-10'>
                    <h3 className='text-5xl'>ข่าวสารล่าสุด</h3>
                    <div className="flex flex-row justify-between items-center mb-5">
                        <p className='text-2xl my-5 text-gray-400'>รวบรวมข่าวสารและสาระสำคัญ</p>
                        <Link href='/news' className='text-2xl my-5 text-blue-500 hover:text-black underline'>ดูข่าวสารทั้งหมด</Link>
                    </div>
                    <Carousels />
                </div>
                <div className='bg-gray-100 mt-8 max-xl:px-8'>
                    <div className='max-w-screen-xl mx-auto py-10'>
                        <h3 className='text-5xl'>จองรถกับไดรฟ์ซีพี</h3>
                        <p className='text-2xl my-5 text-gray-400'>จองรถกับเราดียังไง</p>
                        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 justify-items-center my-10 max-md:flex-col'>
                            <motion.div className='flex flex-col justify-center items-center max-md:py-3' whileHover={{ scale: 1.1 }}>
                                <FcCancel size={75} />
                                <p className='text-2xl font-bold my-3'>ยกเลิกฟรี</p>
                                <p className='text-xl'>แจ้งล่วงหน้า 24 ชั่วโมง</p>
                            </motion.div>
                            <motion.div className='flex flex-col justify-center items-center max-md:py-3' whileHover={{ scale: 1.1 }}>
                                <FcClock size={75} />
                                <p className='text-2xl font-bold my-3'>รวดเร็ว</p>
                                <p className='text-xl'>เข้าใจง่าย และทันสมัย</p>
                            </motion.div>
                            <motion.div className='flex flex-col justify-center items-center max-md:py-3 ' whileHover={{ scale: 1.1 }}>
                                <FcOnlineSupport size={75} />
                                <p className='text-2xl font-bold my-3'>เจ้าหน้าที่ดูแล</p>
                                <p className='text-xl'>มีเจ้าหน้าที่ดูแลตลอดการจอง</p>
                            </motion.div>
                            <motion.div className='flex flex-col justify-center items-center max-md:py-3' whileHover={{ scale: 1.1 }}>
                                <FcOk size={75} />
                                <p className='text-2xl font-bold my-3'>จองได้ทุกที่</p>
                                <p className='text-xl'>จองได้ทุกที่ ทุกเวลา</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className='bg-white max-xl:px-8'>
                    <div className='max-w-screen-xl mx-auto py-10 my-5'>
                        <h3 className='text-5xl'>พันธมิตรของเรา</h3>
                        <p className='text-2xl my-5 text-gray-400'>รวมโปรแกรมที่ใช้พัฒนา</p>
                        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 justify-items-center items-center gap-3 mt-8'>
                            <motion.div className='shadow-lg' whileHover={{ scale: 1.1 }}>
                                <img src="https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp" alt="" className='object-contain w-56 h-40 rounded-md p-5' />
                            </motion.div>
                            <motion.div className='shadow-lg' whileHover={{ scale: 1.1 }}>
                                <img src="https://wp.mridul.tech/wp-content/uploads/2023/02/react-js.png" alt="" className='object-contain w-56 h-40 rounded-md p-5' />
                            </motion.div>
                            <motion.div className='shadow-lg' whileHover={{ scale: 1.1 }}>
                                <img src="./vscode.png" alt="" className='object-contain w-56 h-40 rounded-md p-5' />
                            </motion.div>
                            <motion.div className='shadow-lg' whileHover={{ scale: 1.1 }}>
                                <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_170649.png" alt="" className='object-contain w-56 h-40 rounded-md p-5' />
                            </motion.div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
};

export default Hero;

