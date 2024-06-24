import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
export default function Layout(){
    return (
        <div className='flex flex-row h-screen w-screen'>
                <Sidebar/>
            <div className='flex-1'>
                <div className='flex flex-col  bg-teal-200'>
                    <div className=''>Header</div>
                    <div> <Outlet/></div>
                </div>
            </div>
        </div>
    )
}