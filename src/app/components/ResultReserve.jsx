"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

const ResultReserve = () => {
  const [token, setToken] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("formValue");
    const parsedToken = JSON.parse(token);
    setToken(parsedToken);
  }, []);

  return (

    <div className="max-w-screen-xl mx-auto py-10">
      <h1 className="text-5xl mb-10 max-xl:px-4">ประวิติการจอง</h1>
      <div className="grid justify-items-stretch grid-cols-2 max-lg:grid-cols-1 max-xl:px-4">
        <div className="grid max-lg:grid-cols-1">
          <div className="flex w-full flex-col ">
            <Tabs aria-label="Options" size="lg">
              <Tab key="photos" title="การจองปัจจุบัน">
                <Card>
                  <CardBody className="p-0" >
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" className="px-3 py-3">
                              หมายเลขการจอง
                            </th>
                            <th scope="col" className="px-3 py-3">
                              สถานที่รับ
                            </th>
                            <th scope="col" className="px-3 py-3">
                              จำนวนผู้โดยสาร
                            </th>
                            <th scope="col" className="px-3 py-3">
                              ประเภทรถ
                            </th>
                            <th scope="col" className="px-3 py-3">
                              สถาณะ
                            </th>
                            <th scope="col" className="px-3 py-3">
                              รายละเอียด
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.isArray(token) && token.map((item, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <th
                                scope="row"
                                className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                {item.reservation}
                              </th>
                              <td className="px-3 py-4">{item.selectedLocation}</td>
                              <td className="px-3 py-4">{item.selectedPersonNumber}</td>
                              <td className="px-3 py-4">{item.selectedCar}</td>
                              <td className="px-3 py-4">
                                <span className="inline-flex items-center bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                                  <span className="w-2 h-2 me-1 bg-yellow-300 rounded-full"></span>
                                  Accepted
                                </span>
                              </td>
                              <td className="px-3 py-4 flex justify-center items-center">
                                <Link href={`/reserve/resultreserve/${index + 1}`}>
                                  <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                  </svg>
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="music" title="การจองย้อนหลัง">
                <Card>
                  <CardBody className="p-0">
                    <div className="w-full">
                      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                              <th scope="col" className="px-3 py-3">
                                หมายเลขการจอง
                              </th>
                              <th scope="col" className="px-3 py-3">
                                สถานที่รับ
                              </th>
                              <th scope="col" className="px-3 py-3">
                                จำนวนผู้โดยสาร
                              </th>
                              <th scope="col" className="px-3 py-3">
                                ประเภทรถ
                              </th>
                              <th scope="col" className="px-3 py-3">
                                สถาณะ
                              </th>
                              <th scope="col" className="px-3 py-3">
                                รายละเอียด
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <th
                                scope="row"
                                className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                12569
                              </th>
                              <td className="px-3 py-4">หน้าอาคาร</td>
                              <td className="px-3 py-4">40</td>
                              <td className="px-3 py-4">รถบัส</td>
                              <td className="px-3 py-4">
                                <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                                  <span class="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                                  Completed
                                </span>
                              </td>
                              <td className="px-3 py-4 flex justify-center items-center">
                                <Link href="/reserve/resultreserve/1">
                                  <svg
                                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                  </svg>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>

        </div>
        <div className="w-full shadow-md max-lg:mt-8 ml-4 max-lg:ml-0">
          <div className="md:p-8 md:pb-12 p-5 dark:bg-gray-800 bg-white rounded-t">
            <div className="px-4 flex items-center justify-between">
              <h1 className="text-2xl dark:text-gray-100 text-gray-800">
                February 2024
              </h1>
              <div className="flex items-center text-gray-800 dark:text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler ml-3 icon-tabler-chevron-right"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between pt-12 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">
                          Su
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">
                          Mo
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">
                          Tu
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">
                          We
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">
                          Th
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">
                          Fr
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">
                          Sa
                        </p>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pt-6">
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center" />
                    </td>
                    <td className="pt-6">
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center" />
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center" />
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center" />
                    </td>

                    <td className="pt-6">
                      <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                        <p className="text-2xl w-14 h-14 flex items-center justify-center font-medium text-black bg-green-400 rounded-full">
                          1
                        </p>
                      </div>
                    </td>
                    <td className="pt-6">
                      <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                        <p className="text-2xl w-14 h-14 flex items-center justify-center font-medium text-black bg-green-400 rounded-full">
                          2
                        </p>
                      </div>
                    </td>
                    <td className="pt-6">
                      <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                        <p className="text-2xl w-14 h-14 flex items-center justify-center font-medium text-black bg-green-400 rounded-full">
                          3
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                          4
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                          5
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                          6
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                          7
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                          8
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100">
                          9
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100">
                          10
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                          11
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                          12
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                          13
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                          14
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                          15
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100">
                          16
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100">
                          17
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                          18
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                          19
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                          20
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                          21
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                          22
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100">
                          23
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100">
                          24
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                          25
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                          26
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                          27
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                          28
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="w-full h-full">
                        <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                          <p className="text-2xl w-14 h-14 flex items-center justify-center font-medium text-black bg-yellow-300 rounded-full">
                            29
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl w-14 h-14 flex items-center justify-center font-medium text-black bg-yellow-300 rounded-full">
                          1
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl w-14 h-14 flex items-center justify-center font-medium text-black bg-yellow-300 rounded-full">
                          2
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
            <div className="px-0">.
              <div className="pb-4 border-gray-400 ">
                <p className="text-xl mb-3 text-red-700">การจองปัจจุบัน :</p>
                {Array.isArray(token) && token.map((item, index) => (
                  <div key={index} className="mt-5">
                    <div className="flex items-center gap-3">
                      <p className="text-md font-light leading-3 text-gray-500 pt-2 dark:text-gray-300">
                        วันเดินทาง : {item.selectedDate}
                      </p>
                      <p className="text-md font-light leading-3 text-gray-500 pt-2 dark:text-gray-300">
                        วันกลับ : {item.selectedReturn}
                      </p>
                    </div>
                    <p className="text-xl font-medium leading-5 text-gray-800 dark:text-gray-100 pt-2">
                      จังหวัดปลายทาง : {item.selectedProvince}
                    </p>
                    <p className="text-xl font-medium leading-5 text-gray-800 dark:text-gray-100 pt-2">
                      อำเภอปลายทาง : {item.selectedDistrict}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultReserve;
