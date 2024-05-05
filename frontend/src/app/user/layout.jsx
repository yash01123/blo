'use client'
import React from 'react'
import { Nav } from './navbar';
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
        <Nav />
            {children}
            <Footer />
        </>
    )
}

export default Layout;