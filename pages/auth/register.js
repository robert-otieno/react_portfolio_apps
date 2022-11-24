import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/layout/layout'
import styles from '../../styles/Form.module.css'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from 'react'

const register = () => {
    const [show, setShow] = useState(false)
    return (
        <Layout>
            <Head>
                <title>Portfolio Projects | Auth Register</title>
                <meta name="description" content="React Search Filter" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className='w-3/4 mx-auto flex flex-col gap-4 text-sm'>
                <div className='title'>
                    <h1 className="text-gray-800 text-4xl font-bold py-3">Explore</h1>
                    <p className='w-3/4 mx-auto text-gray-400'>Lorem ipsum dolor sit amet. </p>
                </div>

                <form className='flex flex-col gap-2'>
                    <div className={styles.input_group}>
                        <input className={styles.input_text} type="email" name="email" placeholder="Email" />
                        <span className='icon flex items-center px-4'><HiAtSymbol size={20} /></span>
                    </div>
                    <div className={styles.input_group}>
                        <input className={styles.input_text} type={`${show ? "text" : "password"}`} name="password" placeholder="Password" />
                        <span className='icon flex items-center px-4 cursor-pointer hover:text-indigo-500' onClick={() => setShow(!show)}><HiFingerPrint size={20} /></span>
                    </div>

                    {/* Login buttons */}
                    <div className='input-button'>
                        <button type="submit" className={styles.btn__primary}>Submit</button>
                    </div>
                    <div className='input-button'>
                        <button type="button" className={styles.btn__secondary}>Sign In with Google <FcGoogle size={20} /></button>
                    </div>
                    <div className='input-button'>
                        <button type="button" className={styles.btn__secondary}>Sign In with Github <FaGithub size={20} /></button>
                    </div>
                </form>

                <p className="text-center text-xs text-gray-400">Don't have an account yet? <Link href='/auth/register' className='text-blue-700 focus:outline-none'>Sign Up</Link></p>
            </section>
        </Layout>
    )
}

export default register