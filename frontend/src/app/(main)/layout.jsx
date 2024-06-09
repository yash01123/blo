import React from 'react'
import Navbar from './navbar';
import Footer from './Footer'



const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />


            {children}

            <Footer />  
        </>
    )
}

export default MainLayout;