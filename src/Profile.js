import React from 'react';

const imgStyle = {
    width: "200px",
    borderRadius: "90px"
}

const textStyle = {
    color: "purple",
    fontSize: "15px",
    // backgroundColor: "gray"
};
const statStyle={
    width: "20px",
    color: 'red',
    backgroundColor: 'black',
}



export default function Profile({user}) {
    return (
    <div>
    <div>
        <img style={{...imgStyle}} src={user.avatar} alt="avatar"/>
        <p style={{...textStyle}}>{user.name}</p>
        <p style={{...textStyle}}>{user.tag}</p>
        <p style={{...textStyle}}>{user.location}</p>
    </div>
    <ul>
        <li>
            <span style={{...statStyle}}>Followers</span>
            <span>{user.stats.followers}</span>
        </li>

        <li>
            <span style={{...statStyle}}>Views</span>
            <span>{user.stats.views}</span>
        </li>

        <li>
            <span style={{...statStyle}}>Likes</span>
            <span>{user.stats.likes}</span>
        </li>
    </ul>
    </div>
)};


          
            