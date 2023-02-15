import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';

console.log(user);
console.log(data);
console.log(friends);

export const App = () => {
  return (
    <main>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      ></Profile>
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} />; */}
      <FriendList friends={friends} />;
    </main>
  );
};
