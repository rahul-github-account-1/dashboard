import React from 'react'
import { SlBag } from "react-icons/sl";
import { HiOutlineArrowLongUp } from "react-icons/hi2";

export default function DashboardStatsGrid() {
  return (
    <div className='flex gap-8 w-full '>
      <BoxWrapper>
        <div className='rounded-full h-8 w-8 border-solid border-2 text-white  flex  items-center justify-center bg-pink-600'>
          <SlBag className='text-xl' />
        </div>
        <div className='flex flex-col border-solid border-2 rounded w-32 pl-2'>
          <div>Total Sales</div>
          <div className='flex flex-row' >
            <div className='text-xl font-bold text-gray-900'>$2310</div>
            <div className='text-sm text-green-500 flex flex-row     '>
              <HiOutlineArrowLongUp className='text-sm mt-1' />
              <div>235
              </div>            
            </div>
          </div>

        </div>

      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-8 w-8 border-solid border-2 text-white  flex  items-center justify-center bg-pink-600'>
          <SlBag className='text-xl' />
        </div>
        <div className='flex flex-col p-4 m-1'>
          <div>Total Sales</div>
          <div className='flex flex-row' ><div className='text-xl font-bold text-gray-900'>$2310</div><span className='text-sm text-green-500'>+235</span></div>

        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-8 w-8 border-solid border-2 text-white  flex  items-center justify-center bg-pink-600'>
          <SlBag className='text-xl' />
        </div>
        <div className='flex flex-col p-4 m-1'>
          <div>Total Sales</div>
          <div className='flex flex-row' ><div className='text-xl font-bold text-gray-900'>$2310</div><span className='text-sm text-green-500'>+235</span></div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-8 w-8 border-solid border-2 text-white  flex  items-center justify-center bg-pink-600'>
          <SlBag className='text-xl' />
        </div>
        <div className='flex flex-col p-4 m-1'>
          <div>Total Sales</div>
          <div className='flex flex-row' ><div className='text-xl font-bold text-gray-900'>$2310</div><span className='text-sm text-green-500'>+235</span></div>

        </div>
      </BoxWrapper>
    </div>
  )
}

function BoxWrapper({ children }) {
  return (
    <div className='flex flex-row items-center p-4 m-4 h-16 w-full items-center rounded border border-gray-200'>
      {children}
    </div>
  )
}









































































