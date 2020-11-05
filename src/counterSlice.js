import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name:"counter",
    initialState: 10,
    reducers:{
        addValue: state => state+1,
        minusValue: state => state-1
    }
})

export const {addValue, minusValue} = counterSlice.actions
export default counterSlice.reducer;
