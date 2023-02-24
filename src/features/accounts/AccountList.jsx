import { useGetAccountsQuery } from './accountsApiSlice';

const AccountList = () => {
  const {
    data: accounts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAccountsQuery();

  let content;

  if (isLoading) content = <p>Loading...</p>;
  if (isError) content = <p className="err-msg">{error?.data?.message}</p>;
  if (isSuccess) {
    const { ids } = accounts;
    const tableContent = ids?.length
      ? ids.map((accountId) => (
          <Account key={accountId} accountId={accountId}></Account>
        ))
      : null;
  }
  return <div>AccountList</div>;
};

export default AccountList;
