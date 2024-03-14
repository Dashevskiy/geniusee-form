import React, { forwardRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { validateEmail } from '../../helpers/validation';
import { updateemail } from '../../store/form';
import './index.css';

const EmailField = forwardRef(function EmailField(props, ref) {
  const dispatch = useDispatch();
  const {value, err} = useSelector(state => state.form.email);

  const onUpdateField = async (value) => {
    const validate = await validateEmail(value);
    dispatch(updateemail({value, validate}));
  }
  
  return (
    <label>
      <span className='form-field-title'>email:</span>
      <input 
        id={'email'}
        className={err ? 'err' : ''}
        ref={ref}
        placeholder='***@***.***'
        type='email' 
        onChange={(event)=>onUpdateField(event.target.value)}
        onBlur={(event)=>onUpdateField(event.target.value)}/>
      {<div className='error'>{err}</div>}
    </label>
  )
})

export default EmailField;