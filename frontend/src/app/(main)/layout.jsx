import React from 'react'
import Navbar from './navbar';
import Footer from './Footer'



const MainLayout = ({ children }) => {
    return (
        <>
            <html>
                <body>
                    <Navbar />
                  
                    
                    {children}  
                    <Footer />
                   
                </body>
            </html>

        </>
    )
}

export default MainLayout;