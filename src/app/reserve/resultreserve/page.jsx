import { Navbar, ContentWrap, BreadCrumb, Footer, ResultReserve } from '@/app/components'

import * as React from "react";

const Page = async () => {

    return (
        <>
            <header>
                <Navbar />
            </header>
            <ContentWrap>
                <BreadCrumb />
                <ResultReserve />
                <Footer />
            </ContentWrap>
        </>
    )
}

export default Page;