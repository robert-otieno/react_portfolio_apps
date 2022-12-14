import { Disclosure } from '@headlessui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import {
    MdOutlineSpaceDashboard,
    MdOutlineAnalytics,
    MdOutlineIntegrationInstructions,
    MdOutlineMoreHoriz,
    MdOutlineSettings,
    MdOutlineLogout
} from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { FaRegComments } from 'react-icons/fa'
import { BiMessageSquareDots } from 'react-icons/bi'
import Link from 'next/link'

const links = [
    {
        name: 'Dashboard',
        icon: <MdOutlineSpaceDashboard className='text-2xl text-gray-600 group-hover:text-white' />,
    },
    {
        name: 'Profile',
        icon: <CgProfile className='text-2xl text-gray-600 group-hover:text-white' />,
    },
    {
        name: 'Comments',
        icon: <FaRegComments className='text-2xl text-gray-600 group-hover:text-white' />,
    },
    {
        name: 'Analytics',
        icon: <MdOutlineAnalytics className='text-2xl text-gray-600 group-hover:text-white' />,
    },
    {
        name: 'Messages',
        icon: <BiMessageSquareDots className='text-2xl text-gray-600 group-hover:text-white' />,
    },
    {
        name: 'Integration',
        icon: <MdOutlineIntegrationInstructions className='text-2xl text-gray-600 group-hover:text-white' />,
    }
]

function Sidebar() {
    return (
        <div>
            <Disclosure>
                <Disclosure.Button className='absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-blue-900 hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group'>
                <GiHamburgerMenu className='block md:hidden h-6 w-6' />
                </Disclosure.Button>

                <Disclosure.Panel className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                    <div className="flex flex-col justify-start items-center">
                        <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
                            Lovesprings
                        </h1>

                        {/* Links */}
                        <div className="my-4 border-b border-gray-100 pb-4 w-full">
                            {links.map((link, index) => (
                                <div key={index} className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                    {link.icon}
                                    <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>{link.name}</h3>
                                </div>
                            ))}
                        </div>

                        {/* Settings & More */}
                        <div className="my-4 border-b border-gray-100 pb-4 w-full">
                            <Link href='contact' className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <MdOutlineSettings className='text-2xl text-gray-600 group-hover:text-white' />
                                <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>Contact</h3>
                            </Link>
                            <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <MdOutlineMoreHoriz className='text-2xl text-gray-600 group-hover:text-white' />
                                <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>More</h3>
                            </div>
                        </div>

                        {/* Logout */}
                        <div className="my-4 w-full">
                            <div className="flex mb-2 justify-start items-center gap-4 px-5 border border-gray-200 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <MdOutlineLogout className='text-2xl text-gray-600 group-hover:text-white' />
                                <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>Logout</h3>
                            </div>
                        </div>
                    </div>
                </Disclosure.Panel>
            </Disclosure>
        </div>
    )
}

export default Sidebar