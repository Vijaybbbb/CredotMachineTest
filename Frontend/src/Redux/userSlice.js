import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
       name:'user',
       initialState:{
              userId:null
       },
       reducers:{
              storeUser:(state,action)=>{
                     state.userId = action.payload
              }
       }
})

export const {storeUser} = userSlice.actions
export default userSlice.reducer