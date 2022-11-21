import styles from '../styles/Form.module.css'

const FormInput = (props) => {
    const { label, errorMessage, onChange, id, ...inputProps } = props
  return (
    <div className={styles.input_group}>
        <label className='text-xs font-semibold text-slate-600 mb-2' htmlFor="">{label}<span className='text-red-500'>*</span></label>
        <input className={styles.input_text} {...inputProps} onChange={onChange} />
        <span className={`text-xs py-2 text-red-500 hidden`}>{errorMessage}</span>
    </div>
  )
}

export default FormInput