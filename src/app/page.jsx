"use client"
import { Navbar, ContentWrap,Hero,Footer,NavberAdmin } from '@/app/components'
import { usePathname } from 'next/navigation';
import * as React from "react";

const Page = async () => {
  const url = usePathname();
  const isAdmin = url === "/admin" || url === "/admin/categories" || url === "/admin/driver";

  return (
    <>
      <header>
        {isAdmin ? <NavberAdmin /> : <Navbar />}
      </header>
      <ContentWrap>
        <Hero/>
      </ContentWrap>
    </>
  )
}

export default Page;