import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friends/FriendList';
import { Transactionhistory } from './TransactionHistory/Transactionhistory';
import user from '../data/user.json';
import stats from '../data/data.json';
import friends from '../data/friends.json';
import items from '../data/transactions.json'

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={stats} />
      <FriendList friends={friends} />
      <Transactionhistory items={items}/>
    </div>
  );
};
