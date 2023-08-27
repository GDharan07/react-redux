import { createSlice } from "@reduxjs/toolkit";

const initialstatevalue="";
export const themeSlice = createSlice({
    name:"user",
    initialState :{value : initialstatevalue},
    reducers:{
        changeColor:(state,action)=>{
            state.value=action.payload;
        },

       
    }
})

export const {changeColor} = themeSlice.actions;
export default themeSlice.reducer;