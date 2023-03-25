import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {persistReducer } from 'redux-persist'

const myContactsSlice = createSlice({
    name: 'contacts',
    initialState: {value : []},
    reducers: {
        add(state, action) {
            state.value.push(action.payload)
        },
        deleteBtn(state, action) {
        const index = state.value.findIndex(item => item.name === action.payload);
            state.value.splice(index, 1);
        },
    },
})
    
const persistConfig = {
  key: 'contacts',
    storage,
}
 
const persistContactsReducer = persistReducer(persistConfig, myContactsSlice.reducer);

export const { add, deleteBtn } = myContactsSlice.actions;
export const contactsReducer = persistContactsReducer;
