import React, { forwardRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { InputMask as InputMaskPhone } from '@react-input/mask';
import { updatephone } from '../../store/form';
import { validatePhone } from '../../helpers/validation';
import './index.css';

const PhoneField = forwardRef(function PhoneField(props, ref) {
  const dispatch = useDispatch();
  const {value, err} = useSelector(state => state.form.phone);

  const onUpdateField = (value) => {
    const validate = validatePhone(value);
    dispatch(updatephone({value, validate}));
  }
  
  return (
    <label>
      <div className='form-field-title'>phone:</div>
      <div className='phone-container'>
        <div className='country-code'>+38</div>
        <InputMaskPhone 
          className={err ? 'err' : ''}
          placeholder='(000) 000-00-00'
          ref={ref}
          value={value}
          name='phone'
          mask="(___) ___-__-__" 
          replacement={{ _: /\d/ }}
          onChange={(event)=>onUpdateField(event.target.value)}
          onBlur={(event)=>onUpdateField(event.target.value)}/>
      </div>
      {<div className='error'>{err}</div>}
    </label>
  )
})

export default PhoneField;