import React, { useState } from 'react'
import FormInput from '../components/FormInput'

const register = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        birthday: '',
        password: '',
        confirmPassword: ''
    })
    // To prevent re-rendering each time you type a letter
    // const UsernameRef = useRef()

    const inputs = [
        { 
            id: 1, 
            name: 'username', 
            type: 'text', 
            label: 'Username', 
            placeholder: 'Username', 
            pattern: "^[A-Za-z0-9]{3,16}$", 
            required: true, 
            errorMessage: "Username Should be 3-16 characters and shouldn't include any special character" },
        { 
            id: 2, 
            name: 'email', 
            type: 'email', 
            label: 'Email', 
            placeholder: 'Email', 
            required: true, 
            errorMessage: "Must be a valid email address" },
        { 
            id: 3, 
            name: 'birthday', 
            type: 'date', 
            label: 'Birthday', 
            placeholder: 'Birthday' },
        { 
            id: 4, 
            name: 'password', 
            type: 'password', 
            label: 'Password', 
            placeholder: 'Password', 
            required: true, 
            errorMessage: 'Password must be 8-10 characters and should include atleast 1 letter, 1 number and one special character' },
        { 
            id: 5, 
            name: 'confirmPassword', 
            type: 'password', 
            label: 'Confirm Password', 
            placeholder: 'Confirm Password', 
            required: true, 
            pattern: values.password,
            errorMessage: "Passwords don't match" }
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        // const data = new FormData(e.target)
        // console.log(Object.fromEntries(data.entries()))
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    // console.log(values)

    return (
        <div className='font-sans bg-gray-200 flex items-center justify-center h-screen'>
            <form className='flex flex-col bg-white shadow-md w-full max-w-sm md:max-w-md lg:max-w-lg p-8' onSubmit={handleSubmit}>
                <h1 className='font-bold text-slate-900 text-3xl text-center py-2'>Register</h1>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}
                    // refer={UsernameRef}
                    // name='username'
                    // placeholder='Username'
                    // setUsername={setUsername}
                    />
                ))}
                <button className='bg-red-700 hover:bg-red-700 p-3 text-white font-bold text-xl'>Submit</button>
            </form>
        </div>
    )
}

export default register