"use client"
import { Navbar, ContentWrap, BreadCrumb, Footer, Sidebar, DriverManage, NavberAdmin, Admin, Categories } from '@/app/components'

import * as React from "react";
import { usePathname } from 'next/navigation';

const Manage = async () => {
    const url = usePathname();
    const isAdmin = url === "/admin" || url === "/admin/categories" || url === "/admin/driver";

    let componentToRender = null;

    if (url === "/admin") {
        componentToRender = <Admin />;
    } else if (url === "/admin/categories") {
        componentToRender = <Categories />;
    } else if (url === "/admin/driver") {
        componentToRender = <DriverManage />;
    }

    return (
        <>
            <header>
                {isAdmin ? <NavberAdmin /> : <Navbar />}
            </header>
            <ContentWrap>
                <BreadCrumb />
                {componentToRender}
            </ContentWrap>
        </>
    )
}

export default Manage;