'use client'
import React, { useState, useEffect } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import Link from 'next/link';
import { Footer, Carousel } from '@/app/components'
import Swal from 'sweetalert2';
const Reserve = () => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedReturn, setSelectedReturn] = useState('');
    const [selectedCar, setSelectedCar] = useState('');
    const [selectedPersonNumber, setSelectedPersonNumber] = useState('');
    const [selectedPerson, setSelectedPerson] = useState('');
    const [selectedPhone, setSelectedPhone] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [reservation, setReservation] = useState('');

    const [loading, setLoading] = useState(true);

    const [token, setToken] = useState({});

    useEffect(() => {
        const token = localStorage.getItem("reserve");
        const parsedToken = JSON.parse(token);
        setToken(parsedToken);
    }, []);

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    useEffect(() => {
        fetchProvinces();
        setReservation(generateRandomReservationNumber());
    }, []);

    const fetchProvinces = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json');
            const data = await response.json();
            setProvinces(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching provinces:', error);
            setLoading(false);
        }
    };


    const fetchDistricts = async (provinceName) => {
        try {

            const selectedProvinceData = provinces.find(province => province.name_th === provinceName);
            if (selectedProvinceData) {
                const districts = selectedProvinceData.amphure.map(amphure => amphure.name_th);
                setDistricts(districts);
            }
        } catch (error) {
            console.error('Error fetching districts:', error);
        }
    };
    const generateRandomReservationNumber = () => {
        const randomNumber = Math.floor(Math.random() * 100000); 
        return randomNumber.toString().padStart(5, '0'); 
    };
    const handleSaveClick = () => {
        Swal.fire({
            title: 'แน่ใจหรือไม่?',
            text: 'คุณต้องการที่จะจองรถใช่หรือไม่?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ยืนยัน',
            cancelButtonText: 'ยกเลิก',
        }).then((result) => {
            if (result.isConfirmed) {
                const data = {
                    reservation,
                    selectedDate: selectedDate || token.reserveDate,
                    selectedLocation: selectedLocation || token.reserveLocation,
                    selectedReturn: selectedReturn || token.reserveReturn,
                    selectedCar,
                    selectedPersonNumber,
                    selectedPerson,
                    selectedPhone,
                    selectedTime,
                    selectedProvince,
                    selectedDistrict,
                };

                const existingListJSON = localStorage.getItem("formValue");
                const existingList = existingListJSON ? JSON.parse(existingListJSON) : [];

                existingList.push(data);

                localStorage.setItem("formValue", JSON.stringify(existingList));

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "ขอบคุณที่ใช้บริการ",
                    showConfirmButton: false,
                    timer: 2500
                });
                window.location.href = '/reserve/resultreserve';
            }
        });
    };

    return (
        <div className='max-w-screen-xl mx-auto pt-10 pb-16'>
            <h1 className='text-5xl mb-10 max-xl:px-4'>จองรถ</h1>
            <div className='grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-1 max-xl:grid-cols-1  justify-items-stretch items-center max-xl:mx-4 bg-white border-1 rounded-2xl p-5'>
                <div className="relative max-xl:col-span-3">
                    <p className='pb-3'>สถานที่รับ</p>
                    <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none mt-9">
                        <IoLocationOutline />
                    </div>
                    <input
                        value={selectedLocation || token.reserveLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        type="text"
                        id=""
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="โปรดเลือกสถานที่รับ"
                        required
                    />
                </div>
                <div className='grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-3 max-xl:grid-cols-2 justify-items-stretch items-center my-4 xl:ml-2 col-span-2'>
                    <div className="relative">
                        <p className='pb-3'>วันเดินทาง</p>
                        {/* <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none mt-9">
                                    <LuCalendar />
                                </div> */}
                        <input
                            value={selectedDate || token.reserveDate}
                            onChange={handleDateChange}
                            type="date"
                            id=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-l-lg placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=""
                            required
                        />
                    </div>
                    <div className="relative max-lg:col-span-3 max-lg:mb-5 max-xl:ml-1 max-xl:mt-4 md:mt-0 sm:mt-0">
                        <p className='pb-3'>วันเดินทาง {selectedDate || token.reserveDate} เวลารับ</p>
                        <input
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            type="time"
                            id=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ps-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="relative">
                        <p className='pb-3'>วันกลับ</p>
                        {/* <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none mt-9">
                                    <LuCalendarCheck2 />
                                </div> */}
                        <input
                            value={selectedReturn || token.reserveReturn}
                            onChange={(e) => setSelectedReturn(e.target.value)}
                            type="date"
                            id=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-r-lg placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                            placeholder=""
                            required
                        />
                    </div>
                </div>
                <div className="relative col-span-3">
                    <p className='pb-3'>เลือกประเภทรถ</p>
                    <select
                        id=""
                        value={selectedCar}
                        onChange={(e) => setSelectedCar(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="" disabled>เลือกประเภทรถ</option>
                        <option value="รถตู้">รถตู้</option>
                        <option value="รถเก๋ง">รถเก๋ง</option>
                        <option value="รถบัส">รถบัส</option>
                    </select>
                </div>
                <div className='grid grid-cols-2 max-sm:grid-cols-1 max-md:grid-cols-1 max-xl:grid-cols-2 justify-items-stretch items-center my-4 col-span-3'>
                    <div className="relative mr-1 max-md:mr-0">
                        <p className='pb-3'>จังหวัดปลายทาง</p>
                        <select
                            value={selectedProvince}
                            defaultValue="เลือกจังหวัดปลายทาง"
                            onChange={(e) => {
                                setSelectedProvince(e.target.value);
                                fetchDistricts(e.target.value);
                            }}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option selected>เลือกจังหวัดปลายทาง</option>
                            {loading ? (
                                <option>Loading...</option>
                            ) : (
                                provinces.map(province => (
                                    <option key={province.id} value={province.name_th}>{province.name_th}</option>
                                ))
                            )}
                        </select>
                    </div>
                    <div className="relative ml-1 max-md:ml-0">
                        <p className='pb-3'>อำเภอปลายทาง</p>
                        <select
                            value={selectedDistrict}
                            defaultValue="เลือกอำเภอปลายทาง"
                            onChange={(e) => setSelectedDistrict(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option selected>เลือกอำเภอปลายทาง</option>
                            {loading ? (
                                <option>Loading...</option>
                            ) : (
                                districts.map(district => (
                                    <option key={district.id} value={district}>{district}</option>
                                ))
                            )}
                        </select>

                    </div>
                </div>
                <div className='grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-xl:grid-cols-2 justify-items-stretch items-center col-span-3'>
                    <div className="relative max-lg:col-span-3 max-lg:mb-5 max-xl:mr-1">
                        <p className='pb-3'>จำนวนผู้โดยสาร</p>
                        <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none mt-9 ">
                            <IoLocationOutline />
                        </div>
                        <input
                            value={selectedPersonNumber}
                            onChange={(e) => setSelectedPersonNumber(e.target.value)}
                            type="text"
                            id=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="จำนวนผู้โดยสาร"
                            required

                        />
                    </div>
                    <div className="relative max-lg:col-span-3 max-lg:mb-5 ml-2 max-lg:mx-0 mr-1 max-xl:mr-0 max-xl:ml-1">
                        <p className='pb-3'>ชื่อผู้ร่วมเดินทาง ที่สามารถติดต่อได้</p>
                        <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none mt-9">
                            <IoLocationOutline />
                        </div>
                        <input
                            value={selectedPerson}
                            onChange={(e) => setSelectedPerson(e.target.value)}
                            type="text"
                            id=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="ชื่อผู้ร่วมเดินทาง"
                            required

                        />
                    </div>
                    <div className="relative max-lg:col-span-3 max-lg:mb-5 mr-2 max-lg:mx-0 ml-1 max-xl:ml-0 max-xl:mr-1 max-xl:mt-4 sm:mt-0 md:mt-0 ">
                        <p className='pb-3'>หมายเลขโทรศัพท์มือถือ</p>
                        <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none mt-9">
                            <IoLocationOutline />
                        </div>
                        <input
                            value={selectedPhone}
                            onChange={(e) => setSelectedPhone(e.target.value)}
                            type="text"
                            id=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="หมายเลขโทรศัพท์มือถือ"
                            required

                        />
                    </div>
                </div>

                <button onClick={handleSaveClick} className="col-start-2 col-span-1 mt-9 mb-5 max-xl:col-start-1  w-full text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl  py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">บันทึก</button>
            </div>
        </div>
    );
};

export default Reserve;
