import {createSlice} from '@reduxjs/toolkit';

const form = createSlice({
    name: 'form',
    initialState: {
        firstname: {
            value: '',
            err: false,
        },
        lastname: {
            value: '',
            err: false,
        },
        email: {
            value: '',
            err: false,
        },
        phone: {
            value: '',
            err: false,
        },
        phone2: {
            value: '',
            err: false,
        },
        phone3: {
            value: '',
            err: false,
        },
        country: {
            value: 'Сhoose a country',
            err: false,
        },
        address: {
            value: '',
            err: false,
        },
        creditcard: {
            value: '',
            err: false,
        },
        cvv2: {
            value: '',
            err: false,
        },
    },
    reducers: {
        updatefirstname(state, action) {
            const newFirstname = {
                value: action.payload.value,
                err: action.payload.validate,
            }
            state.firstname = newFirstname;
        },

        updatelastname(state, action) {
            const newLastname = {
                value: action.payload.value,
                err: action.payload.validate,
            }
            state.lastname = newLastname;
        },

        updateemail(state, action) {
            const newEmail = {
                value: action.payload.value,
                err: action.payload.validate,
            }
            state.email = newEmail; 
        },

        updatephone(state, action) {
            const newPhone = {
                value: action.payload.value,
                err: action.payload.validate,
            }
            state.phone = newPhone; 
        },

        updatephone2(state, action) {
            const newPhone = {
                value: action.payload.value,
                err: action.payload.validate,
            }
            state.phone2 = newPhone; 
        },

        updatephone3(state, action) {
            const newPhone = {
                value: action.payload.value,
                err: action.payload.validate,
            }
            state.phone3 = newPhone; 
        },

        updatecountry(state, action) {
            const newCountry = {
                value: action.payload.value,
                err: action.payload.validate,
            }
            state.country = newCountry; 
        },

        updateaddress(state, action) {
            const newAddress = {
                value: action.payload.value,
                err: action.payload.validate,
            }
            state.address = newAddress;
        },

        updatecreditcard(state, action) {
            const newCreditCard = {
                value: action.payload.value,
                err: action.payload.validate,
            }
            state.creditcard = newCreditCard;
        },

        updatecvv2(state, action) {
            const newCvv2 = {
                value: action.payload.value,
                err: action.payload.validate,
            }
            state.cvv2 = newCvv2;
        },

        resetForm(state, action){

            state.firstname = {
                value: '',
                err: false,
            }

            state.lastname = {
                value: '',
                err: false,
            }

            state.email = {
                value: '',
                err: false,
            }
            document.querySelector('#email').value = '';

            state.phone = {
                value: '',
                err: false,
            }

            state.phone2 = {
                value: '',
                err: false,
            }

            state.phone3 = {
                value: '',
                err: false,
            }

            state.country = {
                value: 'Сhoose a country',
                err: false,
            }

            state.address = {
                value: '',
                err: false,
            }

            state.creditcard = {
                value: '',
                mask: '9999-9999-9999-9999',
                err: false,
            }

            state.cvv2 = {
                value: '',
                err: false,
            }

        }
    
    }
})

export const {updatefirstname, updatelastname, updateemail, updatephone, updatephone2, updatephone3, updatecountry, updateaddress, updatecreditcard, updatecvv2, resetForm} = form.actions;

export default form.reducer;