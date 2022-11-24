import Head from 'next/head'
import React from 'react'
import Sidebar from '../components/Sidebar'

function dashboard() {
    return (
        <div>
            <Head>
                <title>Dashboard | Sidebar</title>
                <meta name="description" content="Dashboard" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-gray-100">
                <Sidebar />
            </main>
        </div>
    )
}

export default dashboard