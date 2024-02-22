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
  }),
});

export const {
  useGetUserQuery,
  useCreateUserMutation
} = adminApi;
