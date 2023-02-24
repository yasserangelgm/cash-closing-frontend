import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../../app/api/apiSlice';

const accountsAdapter = createEntityAdapter({});
const initialState = accountsAdapter.getInitialState();

export const accountsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAccounts: builder.query({
      query: () => '/accounts',
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      keepUnusedDataFor: 5,
      transformResponse: (responseData) => {
        const loadedAccounts = responseData.map((account) => {
          account.id = account._id;
          return account;
        });
        return accountsAdapter.setAll(initialState, loadedAccounts);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: 'Account', id: 'LIST' },
            ...result.ids.map((id) => ({ type: 'Account', id })),
          ];
        } else return [{ type: 'Account', id: 'LIST' }];
      },
    }),
  }),
});

export const { useGetAccountsQuery } = accountsApiSlice;

export const selectAccountsResult =
  accountsApiSlice.endpoints.getAccounts.select();

const selectAccountsData = createSelector(
  selectAccountsResult,
  (accountsResult) => accountsResult.data
);

export const {
  selectAll: selectAllAccounts,
  selectById: selectAccountsById,
  selectIds: selectAccountsIds,
} = accountsAdapter.getSelectors(
  (state) => selectAccountsData(state) ?? initialState
);
