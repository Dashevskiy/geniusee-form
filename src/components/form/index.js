import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { resetForm } from '../../store/form';
import './index.css';
import Cvv2 from './cvv2';
import Creditcard from './creditcard';
import Address from './address';
import Country from './country';
import Email from './email';
import Firstname from './firstname';
import Lastname from './lastname';
import Phone from './phone';
import Phone2 from './phone2';
import Phone3 from './phone3';
import {validateAddress, validateCVV2, validateCountry, validateCreditCard, validateEmail, validateName, validatePhone, validatePhone2} from '../../helpers/validation';

const CustomForm = () => {
  const dispatch = useDispatch();

  const termsRef = useRef(null);
  const [terms, setTerms] = useState(false);
  const [termsErr, setTermsErr] = useState(false);

  const [isLoading, setLoading] = useState(false);

  const firstnameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phone1Ref = useRef(null);
  const phone2Ref = useRef(null);
  const phone3Ref = useRef(null);
  const countryRef = useRef(null);
  const addressRef = useRef(null);
  const creditCardRef = useRef(null);
  const cvvRef = useRef(null);

  const firstname = useSelector(state => state.form.firstname);
  const lastname = useSelector(state => state.form.lastname);
  const email = useSelector(state => state.form.email);
  const phone = useSelector(state => state.form.phone);
  const phone2 = useSelector(state => state.form.phone2);
  const phone3 = useSelector(state => state.form.phone3);
  const address = useSelector(state => state.form.address);
  const creditcard = useSelector(state => state.form.creditcard);
  const cvv2 = useSelector(state => state.form.cvv2);
  const country = useSelector(state => state.form.country);

  const onChangeTerms = () => setTerms(prev=>!prev);

  const onSubmitForm = () => {
    let hasErr = false;

    const errors = [
      {'terms': terms},
      {'cvv': cvv2.err}, 
      {'creditcard': creditcard.err}, 
      {'address': address.err}, 
      {'country': country.err}, 
      {'phone3': phone3.err}, 
      {'phone2': phone2.err}, 
      {'phone': phone.err}, 
      {'email': email.err}, 
      {'lastName': lastname.err}, 
      {'firstName': firstname.err}, 
    ];

    errors.forEach(async(err)=>{
      switch (Object.keys(err)[0]) {
        case 'firstName':
          if(validateName(firstname.value).length > 0){
            firstnameRef.current.focus();
            hasErr = true;
          }
          break;

        case 'lastName':
          if(validateName(lastname.value).length > 0){
            lastNameRef.current.focus();
            hasErr = true;
          }
          break;
      
        case 'email':
          const emailSwitch = await validateEmail(email.value);
          if(emailSwitch.length > 0 ){
            emailRef.current.focus();
            hasErr = true;
          }
          break;
      
        case 'phone':
          if(validatePhone(phone.value).length > 0){
            phone1Ref.current.focus();
            hasErr = true;
          }
          break;

        case 'phone2':
          if(validatePhone2(phone2.value).length > 0){
            phone2Ref.current.focus();
            hasErr = true;
          }
          break;

        case 'phone3':
          if(validatePhone2(phone3.value).length > 0){
            phone3Ref.current.focus();
            hasErr = true;
          }
          break;
        
        case 'country':
          if(validateCountry(country.value).length > 0){
            countryRef.current.focus();
            hasErr = true;
          }
          break;

        case 'address':
          if(validateAddress(address.value).length > 0){
            addressRef.current.focus();
            hasErr = true;
          }
          break;

        case 'creditcard':
          if(validateCreditCard(creditcard.value).length > 0){
            creditCardRef.current.focus();
            hasErr = true;
          }
          break;

        case 'cvv':
          if(validateCVV2(cvv2.value).length > 0){
            cvvRef.current.focus();
            hasErr = true;
          }
          break;

          case 'terms':
          if(!terms){
            setTermsErr(true);
            termsRef.current.focus();
            hasErr = true;
          }
          break;

        default:
          console.log('warn: ')
      }
    })

    const data = {
      'firstname': firstname.value,
      'lastname': lastname.value,
      'email': email.value,
      'phones': [phone.value, phone2.value, phone3.value],
      'country': country.value,
      'address': address.value,
      'creditcard': creditcard.value,
      'cvv2': cvv2.value,
      'terms': terms
    };
   
    if(!hasErr){
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        console.log('form data: ', data);
        setTermsErr(!terms);
        setTerms(false);
        dispatch(resetForm());
      }, 1000);
  
    }
  }
  
  return(
    <div className='form-container'>
      <form>
        <div className='personal-information-container'>
            <div className='section-headline'>1. Personal information:</div>
            <div className='data'>
                <Firstname ref={firstnameRef}/>
                <Lastname ref={lastNameRef}/>
            </div>
        </div>

        <div className='contact-information-container'>
          <div className='section-headline'>2. Contact information:</div>
          <div className='data'>
            <Email ref={emailRef}/>
            <Phone ref={phone1Ref}/>
            <Phone2 ref={phone2Ref}/>
            <Phone3 ref={phone3Ref}/>
            <Country ref={countryRef}/>
            <Address ref={addressRef}/>
            </div>
        </div>

        <div className='payment-details-container'>
          <div className='section-headline'>3. Payment details:</div>
          <div className='data'>
            <Creditcard ref={creditCardRef}/>
            <Cvv2 ref={cvvRef}/>
          </div>
        </div>

        <div className='terms-container'>
          <div>
            Agreement with terms of use
            <input ref={termsRef} type="checkbox" checked={terms} onChange={onChangeTerms}/>
            {!terms && termsErr && <div className='error'>The terms and conditions must be accepted</div>}
          </div>
        </div>

        <button type="button" className={`btn-submit ${isLoading ? 'loading' : ''}`} onClick={onSubmitForm}></button>

      </form>
    </div>
  )
};

export default CustomForm;