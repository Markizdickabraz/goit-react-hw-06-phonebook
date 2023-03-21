import { configureStore, createSlice } from "@reduxjs/toolkit";

const myContactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        add(state, action) {
        state.push(action)
    }}
 })


export const store = configureStore({
    reducer: {
        contacts: myContactsSlice.reducer,
        filter: ""
   },
});