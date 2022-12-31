import { configureStore } from '@reduxjs/toolkit';

import selectedCityReducer from './selectedCitySlice';

const store = configureStore({
    reducer: {
        selectedCity: selectedCityReducer,
    },
})

export default store;