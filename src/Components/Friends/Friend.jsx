import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Friend = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h2>This are my friends</h2>
        </div>
    );
};

export default Friend;