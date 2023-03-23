const { createSlice } = require("@reduxjs/toolkit");

const myContactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },
        deleteBtn(state, action) {
           return state.filter(item => item.name !== action.payload);
     },
    },
})
    
export const { add, deleteBtn } = myContactsSlice.actions;
export const contactsReducer = myContactsSlice.reducer;
