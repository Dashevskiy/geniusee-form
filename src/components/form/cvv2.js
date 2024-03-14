import React, { forwardRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updatecvv2 } from '../../store/form';
import { validateCVV2 } from '../../helpers/validation';
import './index.css';

const Cvv2 = forwardRef(function Cvv2(props, ref) {
  const dispatch = useDispatch();
  const {value, err} = useSelector(state => state.form.cvv2);

  const onUpdateField = (value) => {
    const validate = validateCVV2(value);
    dispatch(updatecvv2({value, validate}));
  }
  
  return (
    <label>
      <span className='form-field-title'>CVV2:</span>
        <input 
          className={`cvv2 ${err ? 'err' : ''}`}
          placeholder='***'
          ref={ref}
          type='number' 
          value={value}
          onChange={(event)=>onUpdateField(event.target.value)}
          onInput = {(e) =>{e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,3)}}
          onBlur={(event)=>onUpdateField(event.target.value)}/>
      {<div className='error'>{err}</div>}
    </label>
  )
})

export default Cvv2;