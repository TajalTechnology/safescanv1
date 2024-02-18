import { apiSlice } from "../api/apiSlice";
import { userRegistration } from "./authSlice";


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

  }),
});

export const {
  useRegisterMutation,
} = authApi;
