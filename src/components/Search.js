import { useState } from 'react';
import { useDispatch } from 'react-redux';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { getAutoComplete } from '../utils/apiCalls';
import { change } from "../store/selectedCitySlice";

const Search = () => {
    const [selectedValue, setSelectedValue] = useState("");
    const [citiesArray, setCitiesArray] = useState([]);
    const dispatch = useDispatch();

    const handleInput = (e) => {
        if (!e.target.value) {
            setCitiesArray([]);
        } else {
            getAutoComplete(e.target.value)
                .then(data => {
                    setCitiesArray(data);
                })
        }
    }

    const handleSelect = (_, newValue) => {
        setSelectedValue(newValue);
        if (!newValue) return;
        dispatch(change(newValue));
    }

    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={citiesArray}
            value={selectedValue}
            onChange={handleSelect}
            getOptionLabel={(option) => option ? option.name + ", " + option.country : ""}
            isOptionEqualToValue={(option, value) => option.value === value.value}
            sx={{ width: 325 }}
            renderInput={(params) => {
                return (
                    <TextField {...params} label="Search for City"
                        onChange={handleInput}
                    >
                    </TextField>
                )
            }}
        />
    );
}

export default Search;