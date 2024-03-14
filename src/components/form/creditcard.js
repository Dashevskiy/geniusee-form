import React, { forwardRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import InputMask from "@mona-health/react-input-mask";
import { updatecreditcard } from '../../store/form';
import { validateCreditCard } from '../../helpers/validation';
import './index.css';

const Creditcard = forwardRef(function Creditcard(props, ref) {
  const dispatch = useDispatch();
  const {value, err} = useSelector(state => state.form.creditcard);

  const [creditCardMask, setCreditCardMask] = useState({
    value: '',
    mask: '9999-9999-9999-9999'
  })

  const onUpdateField = (value) => {
    const newState = {
      mask: '9999-9999-9999-9999',
      value: value
    };
    if (/^3[47]/.test(value)) {
      newState.mask = '9999-999999-99999';
    }
    setCreditCardMask(newState);

    const validate = validateCreditCard(value);
    dispatch(updatecreditcard({value, validate}));
  }
  
  return (
    <label>
      <span className='form-field-title'>credit card:</span>
      <InputMask 
        className={err ? 'err' : ''}
        ref={ref}
        placeholder={'1111-1111-1111-1111'}
        mask={creditCardMask.mask} 
        value={value} 
        maskPlaceholder={null}
        onChange={(event)=>onUpdateField(event.target.value)}
        onBlur={(event)=>onUpdateField(event.target.value)}
      />
      {<div className='error'>{err}</div>}
    </label>
  )
})

export default Creditcard;