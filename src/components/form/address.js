import React, { forwardRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateaddress } from '../../store/form';
import { validateAddress } from '../../helpers/validation';
import './index.css';

const Address = forwardRef(function Address(props, ref) {
  const dispatch = useDispatch();
  const {value, err} = useSelector(state => state.form.address);

  const onUpdateField = (value) => {
    const validate = validateAddress(value);
    dispatch(updateaddress({value, validate}));
  }
  
  return (
    <label>
      <span className='form-field-title'>address:</span>
      <input 
        className={err ? 'err' : ''}
        ref={ref}
        name="address" 
        type='text' 
        value={value}
        onChange={(event)=>onUpdateField(event.target.value)}
        onBlur={(event)=>onUpdateField(event.target.value)}/>
      {<div className='error'>{err}</div>}
    </label>
  )
})

export default Address;