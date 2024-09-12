import { Search } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div className='px-5 lg:px-20 z-50 bg-slate-600 flex justify-between sticky top-0 py-[.8rem]'>
        <div className="flex items-center cursor-pointer lg:mr-10">
            <div className='text-3xl font-semibold'>Logo</div>
        </div>
        <div className='flex items-center space-x-4 lg:space-x-10'>
            <Search sx={{fontSize: "1.5rem"}}/>
            <Avatar sx={{width: 30, height: 30}} />
        </div>
    </div>
  )
}

export default Navbar