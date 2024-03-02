import { Navbar, ContentWrap, BreadCrumb, Footer, ReserveDetail } from '@/app/components'

import * as React from "react";

const Page = async ({ params }) => {
    const { resultreserveId } = params

    return (
        <>
            <header>
                <Navbar />
            </header>
            <ContentWrap>
                <BreadCrumb />

                <ReserveDetail resultreserveId={resultreserveId}/>
                <Footer />
            </ContentWrap>
        </>
    )
}

export default Page;