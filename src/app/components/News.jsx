'use client';
import React from 'react';
import { NewsContent } from '@/app/components'
import Link from 'next/link';
import { motion } from "framer-motion";
const News = () => {
    const data = [
        {
            href: "/news/content",
            src: "/teacher.jpeg",
            title: "วิทยาลัยการคอมพิวเตอร์ มข. ขอแสดงความยินดีกับ ผศ. ดร.สุมณฑา เกษมวิลาศ",
            description: "ที่ได้รับรางวัลเชิดชูเกียรติด้านการบริการวิชาการ ระดับดีเด่น"
        },
        {
            href: "",
            src: "/teacher2.jpeg",
            title: "หลักสูตรเทคโนโลยีสารสนเทศ วิทยาลัยการคอมพิวเตอร์ มข. ได้จัดการแข่งขัน IT ROV Tournament #1",
            description: "หลักสูตรเทคโนโลยีสารสนเทศ วิทยาลัยการคอมพิวเตอร์ มข. ได้จัดการแข่งขัน IT ROV Tournament #1 เพื่อเฟ้นหาทีมสุดแกร่ง"
        },
        {
            href: "",
            src: "/teacher3.jpeg",
            title: "ตัวแทนสาขาวิชาวิทยาการคอมพิวเตอร์ เข้านิเทศนักศึกษาปฏิบัติงานสหกิจศึกษาบริษัท ที.ซี.ชี. เทคโนโลยี ณ อุทยาน วิทยาศาสตร์ มหาวิทยาลัยขอนแก่น",
            description: "ตัวแทนสาขาวิชาวิทยาการคอมพิวเตอร์ เข้านิเทศนักศึกษาปฏิบัติงานสหกิจศึกษาบริษัท ที.ซี.ชี. เทคโนโลยี ณ อุทยาน วิทยาศาสตร์ มหาวิทยาลัยขอนแก่น"
        },
        {
            href: "",
            src: "/teacher4.jpeg",
            title: "วิทยาลัยการคอมพิวเตอร์ มข. ร่วมทำบุญตักบาตรและถวายภัตตาหารเช้าแด่พระภิกษุสงฆ์ จำนวน 9 รูป เนื่องในวันคล้ายวันสถาปนา ครอบรอบ 60ปี คณะวิทยาศาสตร์ มหาวิทยาลัยขอนแก่น",
            description: "วิทยาลัยการคอมพิวเตอร์ มข. ร่วมทำบุญตักบาตรและถวายภัตตาหารเช้าแด่พระภิกษุสงฆ์ จำนวน 9 รูป เนื่องในวันคล้ายวันสถาปนา ครอบรอบ 60ปี คณะวิทยาศาสตร์ มหาวิทยาลัยขอนแก่น"
        },
        {
            href: "",
            src: "/teacher5.jpeg",
            title: "วิทยาลัยการคอมพิวเตอร์ มข. เข้าร่วมกิจกรรม Open House Online 2024",
            description: "วิทยาลัยการคอมพิวเตอร์ มข. เข้าร่วมกิจกรรม Open House Online 2024"
        },
    ];

    return (
        <div className='max-w-screen-xl mx-auto py-10'>
            <h1 className='text-5xl mb-10 max-xl:px-4'>ข่าวสาร</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-xl:px-4 justify-items-center'>
                {data.map((item, index) => (
                    <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6 hover:shadow-2xl">
                        <Link href={item.href}>
                            <img className="rounded-t-lg" src={item.src} alt={item.title} />
                        </Link>
                        <div className="p-5">
                            <Link href={item.href}>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default News;
