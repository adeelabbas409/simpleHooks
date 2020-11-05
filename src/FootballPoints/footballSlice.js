import {createSlice} from '@reduxjs/toolkit';

const FootballSlice = createSlice({
    name:"footballPoints",
    initialState: {points: [{team:"Liverpool", points:"12"}, {team:"Brazil", points:"10"}]},
    reducers:{
        addPoints: (state, action) => {state.points[action.payload].points++},
        minusPoints:  (state, action) => {state.points[action.payload].points--}
    }
})

export const {addPoints, minusPoints} = FootballSlice.actions
export default FootballSlice.reducer;
