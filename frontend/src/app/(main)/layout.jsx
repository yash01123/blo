import React from 'react'
import Navbar from './navbar';



const MainLayout = ({ children }) => {
    return (
        <>
            <html>
                <body>


                    <Navbar />


                    {children}
                </body>
            </html>

        </>
    )
}

export default MainLayout;