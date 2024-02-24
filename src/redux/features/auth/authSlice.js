import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    token:localStorage.getItem("token") || "",
    user:  JSON.parse(localStorage.getItem("user")) || "",
    code:"",
    category:"",
    search:"",
    mobile:false,
}


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        userRegistration:(state,action)=>{
            state.token = action.payload.token;
            state.code=action.payload.code;
        },
        userLoggedIn:(state,action)=>{
            state.token=action.payload.accessToken;
            state.user=action.payload.user;
        },
        userLoggedOut:(state)=>{
            state.token="";
            state.user=""; 
        },
        addCategory:(state,action)=>{
            state.category=action.payload;
        },
        addSearch:(state,action)=>{
            state.search=action.payload;
        },
        addMobile:(state,action)=>{
            state.mobile=action.payload;
        }
    }
})

export const {userRegistration,userLoggedOut,userLoggedIn,addCategory,addSearch,addMobile} = authSlice.actions;

export default authSlice.reducer