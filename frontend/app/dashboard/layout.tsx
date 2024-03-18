import Navbar from '@/components/Navbar'
import React from 'react'


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex-col'>
            <Navbar/>

            <div>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout