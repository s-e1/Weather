import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    details: {
        key: "213225",
        name: "Jerusalem",
        country: "Israel"
    }
}

export const selectedCitySlice = createSlice({
    name: 'selectedCity',
    initialState,
    reducers: {
        change: (state, action) => {
            state.details = action.payload;
        }
    },
})

export const { change } = selectedCitySlice.actions

export default selectedCitySlice.reducer