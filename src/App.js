import React from 'react';
import Profile from './Profile';



export default function App() {
    return (
        <div>
              <Profile user={user}/>
        </div>
    )
};
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};