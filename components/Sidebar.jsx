import { Disclosure } from '@headlessui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import {
    MdOutlineSpaceDashboard,
    MdOutlineAnalytics,
    MdOutlineIntegrationInstructions,
    MdOutlineMoreHorizontal,
    MdOutlineSettings,
    MdOutlineLogout
} from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { FaRegComments } from 'react-icons/fa'
import { BiMessageSquareDots } from 'react-icons/bi'

const links = [
    {
        name: 'Dashboard',
        icon: <MdOutlineSpaceDashboard />,
    },
    {
        name: 'Profile',
        icon: <CgProfile />,
    },
    {
        name: 'Comments',
        icon: <FaRegComments />,
    },
    {
        name: 'Analytics',
        icon: <MdOutlineAnalytics />,
    },
    {
        name: 'Messages',
        icon: <BiMessageSquareDots />,
    },
    {
        name: 'Integration',
        icon: <MdOutlineIntegrationInstructions />,
    }
]

function Sidebar() {
  return (
    <div>
        <Disclosure as='nav'>
            <Disclosure.Button className='absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group'>
                <GiHamburgerMenu className='block md:hidden h-6 w-6' aria-hidden='true' />
            </Disclosure.Button>
            <Disclosure.Panel className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                <div className="flex flex-col justify-start items-center">
                    <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
                        Lovesprings
                    </h1>
                    <div className="my-4 border-b border-gray-100 pb-4">
                        <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                            <MdOutlineSpaceDashboard className='text-2xl text-gray-600 group-hover:text-white' />
                            <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>Dashboard</h3>
                        </div>
                    {links.map((link, index) => (
                        <div key={index} className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                            {link.icon}
                            <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>{link.name}</h3>
                        </div>
                    ))}
                    </div>
                </div>
            </Disclosure.Panel>
        </Disclosure>
    </div>
  )
}

export default Sidebar