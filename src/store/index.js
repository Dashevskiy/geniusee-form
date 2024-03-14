import { configureStore } from '@reduxjs/toolkit';
import form from './form';

export default configureStore({
    reducer: {
        form: form
    }
})