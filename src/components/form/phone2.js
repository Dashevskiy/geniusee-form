import React, { forwardRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { InputMask as InputMaskPhone } from '@react-input/mask';
import { updatephone2 } from '../../store/form';
import { validatePhone2 } from '../../helpers/validation';
import './index.css';

const PhoneField2 = forwardRef(function PhoneField2(props, ref) {
  const dispatch = useDispatch();
  const {value, err} = useSelector(state => state.form.phone2);
  const phone1 = useSelector(state => state.form.phone);

  const onUpdateField = (value) => {
    const validate = validatePhone2(value);
    dispatch(updatephone2({value, validate}));
  }
  
  return (
    <label>
      <div className='form-field-title'>phone:</div>
      <div className='phone-container'>
        <div className='country-code'>+38</div>
        <InputMaskPhone 
          className={phone1.value.length === 15 && value.length > 0 && err ? 'err' : ''}
          placeholder='(000) 000-00-00'
          ref={ref}
          disabled={phone1.value.length === 15 ? false : true}
          mask="(___) ___-__-__" 
          value={value}
          replacement={{ _: /\d/ }}
          onChange={(event)=>onUpdateField(event.target.value)}
          onBlur={(event)=>onUpdateField(event.target.value)}/>
      </div>
      {err.length > 0 && <div className='error'>{err}</div>}
    </label>
  )
})

export default PhoneField2;