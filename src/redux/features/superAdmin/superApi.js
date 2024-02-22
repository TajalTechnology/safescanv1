import { apiSlice } from "../api/apiSlice";


export const superApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    customers:builder.query({
        query:(query)=>({
            url:`users?usertype=super_admin&${query}`,
            method:"GET",
        })
    }),
    createCustomer:builder.mutation({
      query:(data)=>({
        url: "user/signup",
        method: "POST",
        body: data,
      })
    })
  }),
});

export const {
    useCustomersQuery,
    useCreateCustomerMutation,
} = superApi;
