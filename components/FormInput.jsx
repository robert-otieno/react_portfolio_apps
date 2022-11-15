import React from 'react'

const FormInput = (props) => {
    const { label, onChange, id, ...inputProps } = props
  return (
    <div className='p-4 my-2'>
        <label htmlFor="">{label}</label>
        <input className='' {...inputProps} onChange={onChange}
            // type="text"
            // placeholder={props.placeholder}
            // name={props.name}
            // ref={props.refer}
            // onChange={e => props.setUsername(e.target.value)}
        />
    </div>
  )
}

export default FormInput