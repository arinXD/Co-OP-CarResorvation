"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
const Car = () => {
  const data = [
    {
      src: "/carcp.png",
      registration: "สอ-9999"
    },
    {
      src: "/carcp1.jpeg",
      registration: "มห-9999"
    },
    {
      src: "/carcp3.png",
      registration: "หห-9999"
    },
    {
      src: "/carcp3.png",
      registration: "รน-6954"
    },
    {
      src: "/carcp3.png",
      registration: "รน-6954"
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto pt-10 pb-16">
      <h1 className="text-5xl mb-10 max-xl:px-4">ยานพาหณะ</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-xl:px-4 justify-items-center'>
        {data.map((item, index) => (
          <Card className="py-4">
            <CardHeader className="pb-3 pt-2 px-4 flex-row justify-between items-center">
              <p className="text-xl uppercase font-bold">ทะเบียน</p>
              <p className="text-xl text-gray-500">{item.registration}</p>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={item.src}
                width={270}
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Car;
