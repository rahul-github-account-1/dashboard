import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout(){
    return (
        <div>
            <div className='bg-sky-200'>
                sidebar
            </div>
            <div className='bg-teal-200'>Header</div>
            <div> <Outlet/></div>
        </div>
    )
}