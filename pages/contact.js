import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import FormInput from '../components/FormInput'

const contact = () => {
    const [values, setValues] = useState({
        phone: '',
        fullname: '',
        email: '',
        website: '',
        message: ''
    })

    const inputs = [
        {
            id: 1,
            name: 'email',
            type: 'email',
            label: 'Email',
            placeholder: 'john.doe@example.com',
            required: true,
            errorMessage: "Please input a valid email"
        },
        {
            id: 2,
            name: 'phone',
            type: 'tel',
            inputMode: 'tel',
            autoComplete: 'tel',
            label: 'Phone Number',
            placeholder: '+254 701 123 345',
            pattern: '^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$',
            required: true,
            errorMessage: "Please input a valid phone number"
        },
        {
            id: 3,
            name: 'fullname',
            type: 'text',
            label: 'Full Name',
            placeholder: 'John Doe',
            required: true,
            errorMessage: 'Please enter a full name',
        },
        {
            id: 4,
            name: 'website',
            type: 'url',
            label: 'Do you currently have a website? If so, can I see it?',
            placeholder: 'www.example.com',
            required: true,
            errorMessage: 'Please enter a valid website',
        }
    ]
    const form = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_z71j0p7', 'template_jxd6zd6', form.current, 'h4QMPJ38PDO7atLwa')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })
        // console.log(values)
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <div className='font-sans bg-gray-200 flex items-center justify-center h-screen'>
            <form ref={form} className='flex flex-col bg-white shadow-md w-full max-w-sm md:max-w-md lg:max-w-lg p-8' onSubmit={handleSubmit}>
                <h1 className="font-bold text-slate-900 text-3xl text-center py-2">Say Hi! 👋</h1>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} onChange={handleChange} />
                ))}
                <div className="flex flex-col w-full mb-4">
                    <label className='text-xs font-semibold text-slate-600 mb-2' htmlFor="">Message<span className='text-red-500'>*</span></label>
                    <textarea className='font-thin tracking-wide text-slate-700 border-gray-300 focus:border-slate-500 focus:ring-slate-500 focus:ring-0 sm:text-sm' name="message" id="message" placeholder="Tell us a bit more about what you're looking for..." rows="5" onChange={handleChange} required={true}></textarea>
                    <span className={`text-xs py-2 text-red-500 hidden`}>Please input a message</span>
                </div>
                <button className='bg-red-700 hover:bg-red-700 p-3 text-white font-bold text-xl'>Submit</button>
            </form>
        </div>
    )
}

export default contact