// import { decodeJWT } from "../../../helper/jwt";
import { apiSlice } from "../api/apiSlice";
import { userLoggedIn, userRegistration } from "./authSlice";


export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "user/regester",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userRegistration({
              token: result.data.token,
              code: "",
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),

    login: builder.mutation({
      query: ({ username, password }) => ({
        url: "user/signin",
        method: "POST",
        body: {
          username, 
          password,
        },
        credentials: "include",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "token",
            JSON.stringify(result?.data?.token)
          );
          dispatch(
            userLoggedIn({
              accessToken: result?.data?.token,
              user: "",
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),

  }),
});

export const {
  useRegisterMutation,
  useLoginMutation
} = authApi;
