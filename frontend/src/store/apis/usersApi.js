import { createApi, fetchBaseQuery } from 'reduxjs/toolkit/query/react';

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
            url: '/auth',
            params: {
              email: email,
            },
            method: 'GET'
          };
        },
      }),
    };
  },
});

export const { useFetchUserQuery } = usersApi;
export { usersApi };
