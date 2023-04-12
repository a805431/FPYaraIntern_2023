import { createApi, fetchBaseQuery } from 'reduxjs/toolkit/query/react';

const userApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    //baseUrl: 'http://localhost:3005'
  }),
});
