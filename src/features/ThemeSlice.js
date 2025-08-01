import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:'themeValue',
    initialState:{
        theme:null,
        cardsData:[],
        isSidebarOpen:false
    },
    reducers:{
        changeTheme:(state,action)=>{
            state.theme=action.payload
        },
        addAllCards:(state,action)=>{
state.cardsData=action.payload
        },
        setSideBarOpen:(state,action)=>{
            state.isSidebarOpen=action.payload
        }
    }
})
export const {changeTheme,addAllCards,setSideBarOpen}=slice.actions
export default slice.reducer