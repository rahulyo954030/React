import { createSlice } from "@reduxjs/toolkit";

const initialAuhtState ={
    isAuthenticated: false
}
const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuhtState,
    reducers:{
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer