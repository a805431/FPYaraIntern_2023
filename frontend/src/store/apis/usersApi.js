import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
  }),
  endpoints(builder) {
    return {
      fetchUser: builder.query({
        query: (email) => {
          return {
            url: '/auth/',
            params: {
              email: email,
            },
            method: 'GET',
            mode: 'cors',
          };
        },
      }),
      signInUser: builder.mutation({
        query: (email, password) => {
          return {
            url: '/auth/signin',
            body: {
              email: email,
              password: password,
            },
            method: 'POST',
            mode: 'cors',
          };
        },
      })
    };
  },
});

export const { useFetchUserQuery, useSignInUserMutation } = usersApi;
export { usersApi };
