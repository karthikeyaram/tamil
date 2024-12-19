import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './Slices/LanguageSlice';

const Store = configureStore({
    reducer: {
        language: languageReducer,
    },
});

export default Store;
