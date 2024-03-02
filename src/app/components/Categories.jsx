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


const Categories = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5);

    const data = [
        {
            categories: 'รถตู้',
            name: 'Alphard',
            registration: 'สอ-9999',
        },
        {
            categories: 'รถเก๋ง',
            name: 'Yaris ATIV',
            registration: 'มห-9999',
        },
        {
            categories: 'รถบัส',
            name: 'RK 251',
            registration: 'หห-9999',
        },
        {
            categories: 'รถบัส',
            name: 'RM 380',
            registration: 'รน-6954',
        },
        {
            categories: 'รถบัส',
            name: 'RM 380',
            registration: 'รน-6954',
        },
        {
            categories: 'รถบัส',
            name: 'RM 380',
            registration: 'รน-6954',
        },
    ];
    const categories = [
        {
            categories: 'รถตู้',
        },
        {
            categories: 'รถเก๋ง',
        },
        {
            categories: 'รถบัส',
        },
    ];

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
                <h1 className='text-5xl '>จัดการรถ</h1>
                <div className="flex justify-end max-md:mt-5 ">
                    <button
                        type="button"
                        className="flex justify-center items-center w-52 max-md:w-full focus:outline-none text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
                    >
                        <GoPlusCircle className="w-6 h-6 mr-2" />
                        เพิ่มรถ
                    </button>
                </div>
            </div>
            <Table aria-label="Example static collection table" className='max-xl:px-4'>
                <TableHeader>
                    <TableColumn>#</TableColumn>
                    <TableColumn>ชื่อรุ่น</TableColumn>
                    <TableColumn>ทะเบียน</TableColumn>
                    <TableColumn>ประเภทรถ</TableColumn>
                    <TableColumn>Action</TableColumn>
                </TableHeader>
                <TableBody>
                    {currentData.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.registration}</TableCell>
                            <TableCell>{item.categories}</TableCell>
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

            <div className="grid grid-cols-2 items-center max-xl:px-4 max-md:grid-cols-1 mt-10 mb-5">
                <h1 className='text-5xl '>จัดการประเภทรถ</h1>
                <div className="flex justify-end max-md:mt-5 ">
                    <button
                        type="button"
                        className="flex justify-center items-center w-52 max-md:w-full focus:outline-none text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
                    >
                        <GoPlusCircle className="w-6 h-6 mr-2" />
                        เพิ่มประเภทรถ
                    </button>
                </div>
            </div>
            <Table aria-label="Example static collection table" className='max-xl:px-4'>
                <TableHeader>
                    <TableColumn>#</TableColumn>
                    <TableColumn>ประเภทรถ</TableColumn>
                    <TableColumn>Action</TableColumn>
                </TableHeader>
                <TableBody>
                    {categories.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{item.categories}</TableCell>
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
        </div>
    )
}

export default Categories;
