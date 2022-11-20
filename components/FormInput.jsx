import React from 'react'

const FormInput = (props) => {
    const { label, errorMessage, onChange, id, ...inputProps } = props
  return (
    <div className='flex flex-col w-full mb-4'>
        <label className='text-xs font-semibold text-slate-600 mb-2' htmlFor="">{label}<span className='text-red-500'>*</span></label>
        <input className='font-thin tracking-wide text-slate-700 border-gray-300 focus:border-slate-500 focus:ring-slate-500 focus:ring-0 sm:text-sm' {...inputProps} onChange={onChange} />
        <span className={`text-xs py-2 text-red-500 hidden`}>{errorMessage}</span>
    </div>
  )
}

export default FormInput