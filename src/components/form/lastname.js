import React, { forwardRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updatelastname } from '../../store/form';
import { validateName } from '../../helpers/validation';
import './index.css';

const LastNameField = forwardRef(function LastNameField(props, ref) {
  const dispatch = useDispatch();
  const {value, err} = useSelector(state => state.form.lastname);

  const onUpdateField = (value) =>{
    const validate = validateName(value);
    dispatch(updatelastname({value, validate}));
  }
    
  return (
      <label>
          <span className='form-field-title'>last name:</span>
          <input 
            className={err ? 'err' : ''}
            ref={ref}
            type='text' 
            value={value}
            onChange={(event)=>onUpdateField(event.target.value)}
            onBlur={(event)=>onUpdateField(event.target.value)}/>
          {<div className='error'>{err}</div>}
      </label>

  )
})

export default LastNameField;