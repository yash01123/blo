import React from 'react'
import { AppProvider } from '../context/AppContext';

const Template = ({ children }) => {
    return (
        <AppProvider>
            {children}
        </AppProvider>
    )
}

export default Template;