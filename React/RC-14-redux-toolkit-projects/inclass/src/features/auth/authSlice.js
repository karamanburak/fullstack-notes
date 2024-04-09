//? Slice ile bir global state'in hem action type'lari , hem action creator fonksiyonlarini hem de reducer'i tek bir hamlede olusturabiliriz.
import { createSlice } from '@reduxjs/toolkit';

// const myState = {
//     user:null,
// };

const initialState = {
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    // initialState:myState,
    initialState, // initialState:initialState
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        loginSuccess: (state,action) => {
            state.user = action.payload
        },
        logoutSuccess : (state) => {
            state.user = null
        }
    }
})

//?Slice yapısı ile Action'lar otomatik olarak oluşturuluyor. olusan action fonksiyonları sliceAdi.actions 'dan destructure edilerek export edilir.
export const {loginSuccess,logoutSuccess} = authSlice.actions

//? yazilan slice'in reducer'i sliceAdi.reducer seklinde export edilmelidir.
export default authSlice.reducer