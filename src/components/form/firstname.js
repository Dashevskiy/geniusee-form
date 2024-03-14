import React, { forwardRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updatefirstname } from '../../store/form';
import { validateName } from '../../helpers/validation';
import './index.css';


const FirstNameField = forwardRef(function FirstNameField(props, ref) {
  const dispatch = useDispatch();
  const {value, err} = useSelector(state => state.form.firstname);

  const onUpdateField = (value) =>{
    const validate = validateName(value);
    dispatch(updatefirstname({value, validate}));
  }
  
  return (
    <label>
      <span className='form-field-title'>first name:</span>
      <input 
        className={err ? 'err' : ''}
        ref={ref}
        type='text' 
        value={value}
        onChange={(event)=>onUpdateField(event.target.value)}
        onBlur={(event)=>onUpdateField(event.target.value)}
        onFocus={(event)=>onUpdateField(event.target.value)}/>
      {<div className='error'>{err}</div>}
    </label>

  )
})

export default FirstNameField;