import React, { useRef, useState } from 'react'
import FormInput from '../components/FormInput'

const index = () => {
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
        { id: 1, name: 'username', type: 'text', label: 'Username', placeholder: 'Username' },
        { id: 2, name: 'email', type: 'email', label: 'Email', placeholder: 'Email' },
        { id: 3, name: 'birthday', type: 'text', label: 'Birthday', placeholder: 'Birthday' },
        { id: 4, name: 'password', type: 'password', label: 'Password', placeholder: 'Password' },
        { id: 5, name: 'confirmPassword', type: 'password', label: 'Confirm Password', placeholder: 'Confirm Password' }
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        // const data = new FormData(e.target)
        // console.log(Object.fromEntries(data.entries()))
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    console.log(values)

    return (
        <div className='flex items-center justify-center h-screen'>
            <form className='' onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}
                    // refer={UsernameRef}
                    // name='username'
                    // placeholder='Username'
                    // setUsername={setUsername}
                    />
                ))}
                <button className=''>Submit</button>
            </form>
        </div>
    )
}

export default index