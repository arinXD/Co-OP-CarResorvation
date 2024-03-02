import { Navbar, ContentWrap, BreadCrumb, Footer, Driver } from '@/app/components'

import * as React from "react";

const Page = async () => {

    return (
        <>
            <header>
                <Navbar />
            </header>
            <ContentWrap>
                <BreadCrumb />
                <Driver />
                <Footer />
            </ContentWrap>
        </>
    )
}

export default Page;