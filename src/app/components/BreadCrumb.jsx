'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = {
    "/": "หน้าหลัก",
    "/news": "ข่าวสาร",
    "/news/content": "รายละเอียดข่าว",
    "/reserve": "จองรถ",
    "/car": "ยานพาหนะ",
    "/reserve/resultreserve": "ประวิติการจอง",
    "/reserve/resultreserve/1": "รายละเอียดการจอง",
    "/driver": "พนักงานขับรถ",
    "/admin": "จัดการการจอง",
    "/admin/categories": "จัดการประเภทรถ",
    "/admin/driver": "จัดการพนักงานขับรถ",
};

const BreadCrumb = () => {
    const url = usePathname();
    const pathSegments = url.split('/').filter(segment => segment !== ''); 

    return (
        <div className='bg-gray-100'>
            <div className="flex mt-20 max-md:mt-16 max-xl:px-4 max-w-screen-xl mx-auto py-10 " aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <Link href="/" passHref>
                            <div className="inline-flex items-center text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                Home
                            </div>
                        </Link>
                    </li>
                    {pathSegments.map((segment, index) => {
                        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
                        return (
                            <li key={index}>
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-5 h-5 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <Link href={path} passHref>
                                        <div className="ms-1 text-md font-medium text-blue-600 hover:text-gray-700 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                                            {links[path]}
                                        </div>
                                    </Link>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
}

export default BreadCrumb;