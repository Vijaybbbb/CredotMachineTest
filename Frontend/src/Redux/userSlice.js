import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
       name:'user',
       initialState:{
              userId:null,
              auth:false
       },
       reducers:{
              storeUser:(state,action)=>{
                     state.userId = action.payload
              },
              authenticated:(state,action)=>{
                     state.auth = action.payload
              }
       }
})

export const {storeUser,authenticated} = userSlice.actions
export default userSlice.reducer