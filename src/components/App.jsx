import React from "react";
import { Profile } from "./Profile/Profile";
import { GlobalStyles } from "./Globalstyle/Globalstyle.styled";
import user from "./data/user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "./data/data.json";
import friends from "./data/friends.json";
import { FriendList } from "./FriendList/FriendList";
import transactions from "./data/transactions.json";
import { Transactions } from "./TransactionHistory/TransactionHistory";
export const App = () => {
  return (
    <>
    <GlobalStyles/>
      <Profile user={user} stats={user.stats}></Profile>
      <Statistics title="Upload stats"  data={data}></Statistics>
      <Statistics   data={data} title={undefined}></Statistics>
      <FriendList friends={friends}></FriendList>
      <Transactions items={transactions} />
    </>
  );
};
