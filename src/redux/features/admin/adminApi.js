import { apiSlice } from "../api/apiSlice";

export const adminApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (query) => ({
        url: `users?${query}`,
        method: "GET",
      }),
    }),
    getAdmin: builder.query({
      query: (query) => ({
        url: `users?usertype=admin${query}`,
        method: "GET",
      }),
    }),
    getWorker: builder.query({
      query: (query) => ({
        url: `users?usertype=worker${query}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserQuery,useGetAdminQuery,useGetWorkerQuery } = adminApi;
