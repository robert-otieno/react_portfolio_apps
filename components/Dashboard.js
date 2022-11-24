import Head from 'next/head'
import React from 'react'
import Sidebar from './Sidebar'

export default function Dashboard({ children }) {
    return (
        <div>
            <Head>
                <title>Dashboard | Sidebar</title>
                <meta name="description" content="Dashboard" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-gray-100 h-screen">
                <Sidebar />
                {children}
            </main>
        </div>
    )
}