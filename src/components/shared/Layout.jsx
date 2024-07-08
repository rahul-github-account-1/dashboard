import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
export default function Layout(){
    return (
        <div className='flex flex-row h-screen w-screen'>
                <Sidebar/>
            <div className='flex-1'>
                <div className='flex flex-col'>
                    <div className=''><Header/></div>
                    <div> <Outlet/></div>
                </div>
            </div>
        </div>
    )
}