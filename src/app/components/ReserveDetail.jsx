"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
const ReserveDetail = ({ resultreserveId }) => {
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    const reservations = JSON.parse(localStorage.getItem("formValue"));
    // const selectedReservation = reservations.filter((item) => item.resultreserveId === resultreserveId);
    const selectedReservation = reservations[resultreserveId - 1];
    setReservation(selectedReservation);
    console.log(selectedReservation);
  }, [resultreserveId]);


  if (!reservation) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto pt-10 pb-16">
      <div className="grid grid-cols-2 items-center max-xl:px-4 max-md:grid-cols-1">
        <h1 className="text-5xl">รายละเอียดการจอง</h1>
        <div className="flex justify-end max-md:mt-5 ">
          <button
            type="button"
            className="flex justify-center items-center w-52 max-lg:w-full px-5 py-3 text-base focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg me-2 mb-2 dark:focus:ring-yellow-900"
          >
            <FiEdit className="w-6 h-6 mr-2" />
            แก้ไขการจอง
          </button>
          <button
            type="button"
            className="flex justify-center items-center w-52 max-lg:w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ml-3"
          >
            <MdOutlineCancel className="w-6 h-6 mr-2" />
            ยกเลิกการจอง
          </button>
        </div>
      </div>
      <div className="max-xl:px-4 mt-10 max-md:mt-5">
        <div className="rounded-lg shadow-md mb-7">
          <p className="text-2xl bg-blue-500 text-white p-4 rounded-t-lg">
            วันเดินทางและปลายทาง
          </p>
          <div className="grid grid-cols-3 gap-4 p-7">
            <div className="">
              <div className="flex flex-wrap gap-4 items-center max-md:gap-1">
                <p className="text-lg font-bold text-black ">วันเดินทาง</p>
                <p className="text-xl text-gray-600 ">{reservation.selectedDate}</p>
              </div>
              <div className="flex flex-wrap gap-4 items-center max-md:gap-1 mt-3">
                <p className="text-lg font-bold text-black ">วันเดินทางกลับ</p>
                <p className="text-xl text-gray-600 ">{reservation.selectedReturn}</p>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap gap-4 items-center max-md:gap-1">
                <p className="text-lg font-bold text-black ">จังหวัดปลายทาง</p>
                <p className="text-xl text-gray-600 ">{reservation.selectedProvince}</p>
              </div>
              <div className="flex flex-wrap gap-4 items-center max-md:gap-1 mt-3">
                <p className="text-lg font-bold text-black ">อำเภอ</p>
                <p className="text-xl text-gray-600 ">{reservation.selectedDistrict}</p>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap gap-4 items-center max-md:gap-1">
                <p className="text-lg font-bold text-black ">หมายเลขการจอง</p>
                <p className="text-xl text-gray-600 ">{reservation.reservation}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow-md mb-7">
          <p className="text-2xl bg-blue-500 text-white p-4 rounded-t-lg">
            ยานพาหนะ
          </p>
          <div className="grid grid-cols-3 gap-4 p-7 max-md:grid-cols-4">
            <div className="">
              <div className="flex flex-wrap gap-4 items-center max-md:gap-1">
                <p className="text-lg font-bold text-black ">
                  ยานพาหนะที่ขอใช้บริการ
                </p>
                <p className="text-xl text-gray-600 ">{reservation.selectedCar}</p>
              </div>
            </div>
            <div className=" max-md:col-start-3 max-md:col-span-2">
              <div className="flex flex-wrap gap-4 items-center max-md:gap-1 ">
                <p className="text-lg font-bold text-black ">ทะเบียน</p>
                <p className="text-xl text-gray-600 ">สอ-9999</p>
              </div>
              <div className="flex flex-wrap gap-4 items-center max-md:gap-1 mt-3 ">
                <p className="text-lg font-bold text-black ">คนขับ</p>
                <p className="text-xl text-gray-600 ">นายอริญชวุธ กัลยานาม</p>
              </div>
            </div>
            <div className="max-md:col-span-4">
              <div className="flex flex-wrap gap-4 items-center max-md:gap-1">
                {reservation.selectedCar === "รถเก๋ง" ? (
                  <img src="/carcp1.jpeg" alt="car" />
                ) : reservation.selectedCar === "รถตู้" ? (
                  <img src="/carcp.png" alt="car" />
                ) : reservation.selectedCar === "รถบัส" ? (
                  <img src="/carcp3.png" alt="car" />
                ) : null}
              </div>
            </div>
          </div>

        </div>
        <div className="rounded-lg shadow-md mb-7">
          <p className="text-2xl bg-blue-500 text-white p-4 rounded-t-lg">
            จำนวนผู้โดยสารและผู้ติดต่อ
          </p>
          <div className="grid grid-cols-3 gap-4 p-7">
            <div className="">
              <div className="flex flex-wrap gap-4 items-center max-md:gap-1">
                <p className="text-lg font-bold text-black ">จำนวนผู้โดยสาร</p>
                <p className="text-xl text-gray-600 ">{reservation.selectedPersonNumber}</p>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap gap-4 items-center max-md:gap-1">
                <p className="text-lg font-bold text-black ">
                  ผู้ร่วมเดินทางที่สามารถติดต่อได้
                </p>
                <p className="text-xl text-gray-600 ">{reservation.selectedPerson}</p>
              </div>
              <div className="flex flex-wrap gap-4 items-center max-md:gap-1 mt-3">
                <p className="text-lg font-bold text-black ">เบอร์โทรศัพท์</p>
                <p className="text-xl text-gray-600 ">{reservation.selectedPhone}</p>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap gap-4 items-center max-md:gap-1">
                <p className="text-lg font-bold text-black ">สถานที่รับ</p>
                <p className="text-xl text-gray-600 ">{reservation.selectedLocation}</p>
              </div>
              <div className="flex flex-wrap gap-4 items-center max-md:gap-1 mt-3">
                <p className="text-lg font-bold text-black ">เวลา</p>
                <p className="text-xl text-gray-600 ">{reservation.selectedTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveDetail;
