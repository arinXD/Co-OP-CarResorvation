import { Navbar, ContentWrap, BreadCrumb, Footer, NewsContent } from '@/app/components'

import * as React from "react";

const Page = async () => {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <ContentWrap>
        <BreadCrumb />
        <NewsContent />
        <Footer />
      </ContentWrap>
    </>
  )
}

export default Page;