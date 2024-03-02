import { Navbar, ContentWrap,BreadCrumb, News,Footer } from '@/app/components'

import * as React from "react";

const Page = async () => {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <ContentWrap>
        <BreadCrumb/>
        <News />
        <Footer/>
      </ContentWrap>
    </>
  )
}

export default Page;