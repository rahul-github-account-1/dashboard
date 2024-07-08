import React from 'react'
import { HiOutlineSearch, HiOutlineUserCircle } from "react-icons/hi";
import { HiOutlineChatAlt } from "react-icons/hi";
import { HiOutlineBell } from 'react-icons/hi';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'


export default function Header() {
    return (
        <div className='bg-blue-300/50 flex flex-row justify-between px-4 py-1 bg-white h-11 align-middle border-b-2'>
            <div className='relative flex flex-row align-middle '>
                <span><HiOutlineSearch fontSize={18} className='h-8 w-6 absolute   translate-y-0.25 translate-x-1 text-gray-400 border-r-2 ' /></span>
                <input type="text" name="" id="" placeholder='Search....' className='mb-0.5 px-8 text-sm focus:outline-none active:outline-none h-8 w-96 border' />

            </div>

            <div className='flex flex-row '>

                <Popover >
                    {({ open }) => (
                        <>
                            <PopoverButton className=" block text-sm/6 font-semibold text-red/50 focus:outline-none data-[active]:bg-gray-100 data-[hover]:bg-gray-100    ">
                                <HiOutlineChatAlt fontSize={25} className='mx-5 mt-2 ' />
                            </PopoverButton>
                            <PopoverPanel
                                transition
                                anchor="bottom"
                                className="divide-y divide-white-900 rounded-xl bg-gray-900/50  text-sm/6 transition duration-100 ease-in-out [--anchor-gap:var(--spacing-5)] translate-y-2 -translate-x-24 data-[closed]:opacity-0"
                            >
                                <div className="p-3">
                                    <a className="block rounded-lg py-2 px-3 transition hover:bg-red-900" href="#">
                                        <p className="font-semibold text-white">Insights</p>
                                        <p className="">Measure actions your users take</p>
                                    </a>
                                </div>

                            </PopoverPanel>
                        </>

                    )}
                </Popover>


                <HiOutlineBell fontSize={25} className='mx-4 mt-2' />
                <Menu>
                    <MenuButton className="  rounded-md  text-sm/6 font-semibold text-stone-950 shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-100  data-[active]:bg-gray-100  data-[focus]:outline-white">
                    <HiOutlineUserCircle fontSize={25} className='mx-4 mt-2 rounded-full hover:border hover:border-red-900'></HiOutlineUserCircle>
                    </MenuButton>

                    <MenuItems
                        transition
                        anchor="bottom end"
                        className="w-40 origin-top-right rounded-xl border border-white/5 translate-y-1 -translate-x-1 bg-gray-900/50 p-1 text-sm/6  text-zinc-50 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                    >
                        <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray/10">
                                Edit
                            </button>
                        </MenuItem>
                        <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                Duplicate
                            </button>
                        </MenuItem>
                        <div className="my-1 h-px bg-white/5" />
                        <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                Archive
                            </button>
                        </MenuItem>
                        <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                Delete
                            </button>
                        </MenuItem>
                    </MenuItems>
                </Menu>

                
            </div>
        </div>
    )
}
