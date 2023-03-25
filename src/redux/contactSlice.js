const { createSlice } = require("@reduxjs/toolkit");

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
    
export const { add, deleteBtn } = myContactsSlice.actions;
export const contactsReducer = myContactsSlice.reducer
