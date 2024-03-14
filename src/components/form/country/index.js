import React, { useState, forwardRef, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updatecountry } from '../../../store/form';
import { string, func } from 'prop-types';
import './index.css';
import { validateCountry } from '../../../helpers/validation';

const Country = forwardRef(function Country(props, ref) {
  const dispatch = useDispatch();
  const {value, err} = useSelector(state => state.form.country);

  const [isActive, setIsActive] = useState(false);
  const options = ['Ukraine', 'USA', 'Poland', 'Finland', 'Germany'];

  const onClickByOption = (value) => {
    setIsActive(false);
    const validate = validateCountry(value);
    dispatch(updatecountry({value, validate}));
  }

  const onBlurCountry = () => {
    const validate = validateCountry(value);
    dispatch(updatecountry({value, validate}));
  }

  return (
    <label>
        <span className='form-field-title'>country:</span>
        <div className='dropdown'>
          <input ref={ref} className='hidden' value={value} onChange={()=>{}} onBlur={onBlurCountry}/>
          <div className={`dropdown-btn ${!options.includes(value) && err ? 'err' : ''}`} onClick={() => setIsActive(!isActive)}>
            {value}
            <span
              className={`${isActive ? 'triangle-top' : 'triangle-bottom'}`}>
            </span>
          </div>
          {isActive && (
            <div className="dropdown-content">
              {options.map((option) => (
                <div key={option}
                  onClick={() => onClickByOption(option)}
                  className={`dropdown-item ${value === option ? 'active' : ''}`}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
        {<div className='error'>{err}</div>}
    </label>
  )
})

export default Country

Country.propTypes = {
  'selected': string,
  'setSelected': func,
  'handleChange': func,
}
