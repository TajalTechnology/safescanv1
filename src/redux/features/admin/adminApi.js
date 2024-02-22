import { apiSlice } from "../api/apiSlice";


export const adminApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser:builder.query({
        query:(query)=>({
            url:`users?${query}`,
            method:"GET",
        })
    }),
  }),
});

export const {
    useGetUserQuery,
    useCreateCustomerMutation,
    useApproveMutation,
} = adminApi;
