'use client';

import React, { useState, useEffect } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";
import { GoPlusCircle } from "react-icons/go";
import {
    EyeIcon,
    EditIcon,
    DeleteIcon
} from '@/app/components/icons'
import { Pagination } from "@nextui-org/react";

const DriverManage = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5);

    const data = [
        {
            name: 'นายพรภวิษย์ ทยอมใหม่',
            categories: 'รถตู้',
            tel: '0632417522'
        },
        {
            name: 'นายอริญชวุธ กัลยานาม',
            categories: 'รถเก๋ง',
            tel: '0632417522'
        },
        {
            name: 'นาย พิชญพงษ์ บุญมา',
            categories: 'รถบัส',
            tel: '0632417522'
        },
        {
            name: 'นาย ศุภณัฐ ดวงสมร',
            categories: 'รถบัส',
            tel: '0632417522'
        },
        {
            name: 'นาย พลอธิป บุญสมดุลย์',
            categories: 'รถบัส',
            tel: '0632417522'
        },
        {
            name: 'นาย ปภินวิทย์ สิมาวัน',
            categories: 'รถบัส',
            tel: '0632417522'
        },
    ]
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    const totalPages = Math.ceil(data.length / rowsPerPage);

    const handleChangePage = (page) => {
        setCurrentPage(page);
    };
    return (
        <div className='max-w-screen-xl mx-auto py-10'>
            <div className="grid grid-cols-2 items-center max-xl:px-4 max-md:grid-cols-1 mb-5">
                <h1 className='text-5xl '>จัดการพนักงาน</h1>
                <div className="flex justify-end max-md:mt-5 ">
                    <button
                        type="button"
                        className="flex justify-center items-center w-52 max-md:w-full focus:outline-none text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
                    >
                        <GoPlusCircle className="w-6 h-6 mr-2" />
                        เพิ่มพนักงาน
                    </button>
                </div>
            </div>
            <Table aria-label="Example static collection table" className='max-xl:px-4'>
                <TableHeader>
                    <TableColumn>#</TableColumn>
                    <TableColumn>ชื่อ-นามสกุล</TableColumn>
                    <TableColumn>เบอร์โทร</TableColumn>
                    <TableColumn>ขับรถ</TableColumn>
                    <TableColumn>Action</TableColumn>
                </TableHeader>
                <TableBody>
                    {currentData.map((driver, index) => (
                        <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{driver.name}</TableCell>
                            <TableCell>{driver.tel}</TableCell>
                            <TableCell>{driver.categories}</TableCell>
                            <TableCell>
                                <div className="relative flex items-center gap-2">
                                    <Tooltip content="Edit">
                                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                            <EditIcon />
                                        </span>
                                    </Tooltip>
                                    <Tooltip color="danger" content="Cancel">
                                        <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                            <DeleteIcon />
                                        </span>
                                    </Tooltip>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Pagination
                currentPage={currentPage}
                onChange={(page) => handleChangePage(page)}
                total={totalPages}
                showControls 
                className='flex justify-center mt-3'
            />
        </div>
    )
}

export default DriverManage;
