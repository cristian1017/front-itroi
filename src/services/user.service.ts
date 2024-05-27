import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type UserType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export const usersApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    fetchUser: builder.query<UserType[], void>({
      query: () => `/posts`,
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: "/posts",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

// export const { useFetchUserQuery, useCreateUserMutation } = usersApi;
export const {
  useFetchUserQuery,
  useDeleteUserMutation,
  useCreateUserMutation,
} = usersApi;
