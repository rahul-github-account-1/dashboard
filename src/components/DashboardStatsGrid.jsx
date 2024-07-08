import React from 'react'

export default function DashboardStatsGrid() {
  return (
    <div className='flex flex-row gap-4 '>
            <BoxWrapper>a</BoxWrapper>
            <BoxWrapper>b</BoxWrapper>
            <BoxWrapper>c</BoxWrapper>
            <BoxWrapper>d</BoxWrapper>
    </div>
  )
}

function BoxWrapper({children}){
        return(
            <div className='h-12 w-24'>
                {children}
            </div>
        )
}









































































