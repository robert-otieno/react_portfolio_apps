import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

const baseURL = 'http://localhost:3000/api'

const search = () => {
    const [query, setQuery] = useState('')
    const [list, setList] = useState([])

    /**
     * Get all users
     * @param { baseURL }
     */
    useEffect(() => {
        axios.get(`${baseURL}/users`).then((response) => {
            setList(response.data)
        })
    }, [])

    /**
     * Search through a list
     * @param {*} list 
     * @returns query
     */
    const search = (list) => {
        return list?.filter((item) => {
            return (
                item.name.toLowerCase().includes(query.toLowerCase())
            )
        })
    }
    return (
        <>
            <Head>
                <title>Portfolio Projects | Search</title>
                <meta name="description" content="React Search Filter" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='bg-white shadow-md w-full max-w-sm md:max-w-md lg:max-w-lg p-8 mx-auto font-sans overflow-auto scrollbar-hide'>
                <h1 className='text-lg font-medium leading-6 text-gray-900 text-center m-0 mb-4'>Search Filter</h1>
                <div className="border-gray-200 px-2 sm:px-4 mt-2.5 dark:bg-gray-900">
                    <div className="relative md:block">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <HiOutlineSearch className='w-5 h-5 text-gray-500' />
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
                    </div>
                </div>
                <hr className="my-2 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div>
                    <ul className="w-full text-sm font-semibold text-gray-900 bg-white dark:bg-gray-700 dark:text-white">
                        {search(list).map((item, itemIdx) => (
                            <li key={itemIdx} className=' px-6 py-2 border-b border-gray-200 w-full'>
                                <div className='flex items-center text-gray-600 font-medium'>
                                    <span className='flex-grow'>{item.name}</span>
                                    <a href={`tel:${item.phone}`} className='tracking-wide'>{item.phone.replace(/(\d{3})(\d{3})(\d{4})/,
                                        '$1-$2-$3')}</a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </>
    )
}

export default search