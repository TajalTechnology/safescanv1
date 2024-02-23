import { apiSlice } from "../api/apiSlice";

export const adminApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (query) => ({
        url: `users?${query}`,
        method: "GET",
      })
    }),
    createUser: builder.mutation({
      query: (userInfo) => ({
        url: "/user/signup",
        method: "POST",
        body: userInfo,
      }),
    }),
    getAdmin: builder.query({
      query: (query) => ({
        url: `users?usertype=admin&${query}`,
        method: "GET",
      }),
    }),
    getWorker: builder.query({
      query: (query) => ({
        url: `users?usertype=worker&${query}`,
        method: "GET",
      }),
    }),
    updateUser:builder.mutation({
      query:({id,bodyData})=>({
        url: `/user/${id}`,
        method: "PATCH",
        body: bodyData,
      })
    })
  }),
});


export const { useGetUserQuery,useGetAdminQuery,useGetWorkerQuery,useCreateUserMutation,useUpdateUserMutation } = adminApi;
