import { apiSlice } from "../api/apiSlice";

export const adminApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (query) => ({
        url: `users?${query}`,
        method: "GET",
      }),
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
    approveUser: builder.mutation({
      query: ({ id, body }) => ({
        url: `user/${id}`,
        method: "PATCH",
        body: body,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `user/${id}`,
        method: "PATCH",
        body: {
          username: "bikashroy123",
          dismissal: 0,
          email: "bikash@gmail.com",
          emloyeer_name: "turik",
          first_name: "bikash",
          last_name: "roy",
          major: 0,
          minor: 0,
          phone: "01773372120",
          site_address: "dhaka",
        },
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `user/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetAdminQuery,
  useGetWorkerQuery,
  useCreateUserMutation,
  useApproveUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = adminApi;
