import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'User',
    initialState: {
        hasUser: false,
        Name: '',
        Phone: '',
        Email: '',
    },
    reducers: {
        setUser: (state,payload) => {
            state.hasUser = true;
            state.Name = payload.payload.Name;
            state.Phone = payload.payload.Phone;
            state.Email = payload.payload.Email;
        },
        resetUser: (state) => {
            state.hasUser = false;
            state.Phone = '';
            state.Email = '';
            state.Name = '';
        },
    }
});

export const {setUser, resetUser} = UserSlice.actions;
export default UserSlice.reducer;