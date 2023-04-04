import React from 'react';
import './Friend.css'

const Friend = ({ friend }) => {
    console.log(friend);
    const { email, name, id, phone } = friend;
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>ID: {id}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default Friend;