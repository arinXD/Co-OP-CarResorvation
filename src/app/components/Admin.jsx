'use client'
import React, { useEffect, useState } from "react";
import {
    EyeIcon,
    EditIcon,
    DeleteIcon
} from '@/app/components/icons'

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";
const Admin = () => {
    const [token, setToken] = useState({});

    useEffect(() => {
        const token = localStorage.getItem("formValue");
        const parsedToken = JSON.parse(token);
        setToken(parsedToken);
    }, []);
    // reservation,
    // selectedDate: selectedDate || token.reserveDate,
    // selectedLocation: selectedLocation || token.reserveLocation,
    // selectedReturn: selectedReturn || token.reserveReturn,
    // selectedCar,
    // selectedPersonNumber,
    // selectedPerson,
    // selectedPhone,
    // selectedTime,
    // selectedProvince,
    // selectedDistrict,
    return (
        <div className='max-w-screen-xl mx-auto py-10'>
            <h1 className='text-5xl mb-10 max-xl:px-4'>จัดการการจอง</h1>
            <Table aria-label="Example static collection table">
                <TableHeader className="text-lg">
                    <TableColumn>หลายเลขการจอง</TableColumn>
                    <TableColumn>จำนวนผู้โดยสาร</TableColumn>
                    <TableColumn>จังหวัดปลายทาง</TableColumn>
                    <TableColumn>อำเภอปลายทาง</TableColumn>
                    <TableColumn>วันเดินทาง</TableColumn>
                    <TableColumn>วันกลับ</TableColumn>
                    <TableColumn>ประเภทรถ</TableColumn>
                    <TableColumn>เวลารับ</TableColumn>
                    <TableColumn>รับที่ไหน</TableColumn>
                    <TableColumn>ACTION</TableColumn>
                </TableHeader>
                <TableBody>
                    {Array.isArray(token) && token.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item.reservation}</TableCell>
                            <TableCell>{item.selectedPersonNumber}</TableCell>
                            <TableCell>{item.selectedProvince}</TableCell>
                            <TableCell>{item.selectedDistrict}</TableCell>
                            <TableCell>{item.selectedDate}</TableCell>
                            <TableCell>{item.selectedReturn}</TableCell>
                            <TableCell>{item.selectedCar}</TableCell>
                            <TableCell>{item.selectedTime}</TableCell>
                            <TableCell>{item.selectedLocation}</TableCell>
                            <TableCell>
                                <div className="relative flex items-center gap-2">
                                    <Tooltip content="Detail">
                                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                            <EyeIcon />
                                        </span>
                                    </Tooltip>
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

export default Admin;