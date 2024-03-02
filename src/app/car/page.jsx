import { Navbar, ContentWrap, BreadCrumb, Footer, Car } from '@/app/components'

import * as React from "react";

const Page = async () => {

    return (
        <>
            <header>
                <Navbar />
            </header>
            <ContentWrap>
                <BreadCrumb />
                <Car />
                <Footer />
            </ContentWrap>
        </>
    )
}

export default Page;