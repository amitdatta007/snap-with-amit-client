import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h1>navbar</h1>
            <Outlet></Outlet>
            <h2>Footer</h2>
        </div>
    );
};

export default Main;