import React from 'react'
import { FcNfcSign } from "react-icons/fc"
import  {DASHBOARD_SIDEBAR_LINKS} from '../../lib/constants/index.jsx'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants/index.jsx'
import { Link, useLocation } from 'react-router-dom'
let className='flex flex-row mx-4 gap-x-2 text-lg py-2 hover:text-xl '
export default function Sidebar() {
  return (
    <div className='w-52 bg-zinc-700 flex flex-col text-slate-100'>
            <div className='flex  px-1 py-1 border-b-4'>
                <FcNfcSign className='mx-5'fontSize={30}/>
                <span className='mx-1 text-xl'>Shopee</span>
            </div>   
            <div className='flex-1 border-t-4 '>
                    {DASHBOARD_SIDEBAR_LINKS.map(item=>
                             <SidebarLinks key={item.key} item={item}></SidebarLinks>
                    )}    
            </div>
            <div className='border-t-2'>
                        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(item=><BottomOfSidebar key={item.key} item={item}></BottomOfSidebar>)}
            </div>  
    </div>
  )
}

export function SidebarLinks({item}){
    console.log(item);
    const {pathname}=useLocation();

        return (
            <div className={pathname==item.path?'hover:bg-red-500 py-2 bg-pink-700':'hover:bg-red-500 py-2'}>
                        <Link to={item.path} className={className} >
                                <div className='text-3xl'>{item.icon}</div>
                                <div>{item.label}</div>
                        </Link>
            </div>
        )
}

export function BottomOfSidebar({item}){
        return(
            <div className='hover:bg-red-500 py-2'>
                        <Link to={item.path} className={className} >
                                <div className='text-3xl'>{item.icon}</div>
                                <div>{item.label}</div>
                        </Link>

            </div>
        )
}
