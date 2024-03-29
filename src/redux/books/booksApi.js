import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63e6769c83c0e85a86945f6f.mockapi.io/books',
  }),
  tagTypes: ['Books'],
  endpoints: builder => ({
    getBooks: builder.query({
      query: () => '/',
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Books', id })),
              { type: 'Books', id: 'LIST' },
            ]
          : [{ type: 'Books', id: 'LIST' }],
    }),
    addBook: builder.mutation({
      query: body => ({
        url: '/',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Books', id: 'LIST' }],
    }),
    removeBook: builder.mutation({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Books', id: 'LIST' }],
    }),
  }),
});

export const { useGetBooksQuery, useAddBookMutation, useRemoveBookMutation } =
  booksApi;

export default booksApi;
