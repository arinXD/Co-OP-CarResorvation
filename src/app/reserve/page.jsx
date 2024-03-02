import { Navbar, ContentWrap, BreadCrumb, Footer, Reserve, PrelineScript } from '@/app/components'

import * as React from "react";

const Page = async () => {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <ContentWrap>
        <BreadCrumb />
        <Reserve />
        <Footer />
      </ContentWrap>
    </>
  )
}

export default Page;