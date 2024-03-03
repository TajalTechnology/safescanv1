import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { authMiddleware } from "./authMiddleware";


export const apiSlice = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:"/api/v1/",
        prepareHeaders: (headers) => {
            // Get the token from localStorage
            const tokenString = localStorage.getItem("token");
      
            if (tokenString !== null) {
              // Set the Bearer token in the headers
              const token = JSON.parse(tokenString);
              headers.set("Authorization", `Bearer ${token}`);
            }
      
            return headers;
          },
    }),
    endpoints:(builder)=>({
        refreshToken:builder.query({
            query:(data)=>({
                url:"refresh-token",
                method:"GET",
            })
        }),
        loadUser:builder.query({
            query:(data)=>({
                url:`users`,
                method:"GET",
            }),
            async onQueryStarted(arg,{queryFulfilled,dispatch}){
                try {
                    const result = await queryFulfilled;
                } catch (error) {
                    if(error?.error?.status){
                        localStorage.removeItem("user")
                        localStorage.removeItem("token")
                    }
                    console.log(error?.error?.status)
                }
            }
        }),
        loadMe:builder.query({
            query:(query)=>({
                url:`users`,
                method:"GET",
            }),
            async onQueryStarted(arg,{queryFulfilled,dispatch}){
                try {
                    const result = await queryFulfilled;
                } catch (error) {
                    if(error?.error?.status){
                        localStorage.removeItem("user")
                        localStorage.removeItem("token")
                    }
                    console.log(error?.error?.status)
                }
            }
        })
    }),
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware),
})

export const {useRefreshTokenQuery,useLoadUserQuery,useLoadMeQuery} = apiSlice