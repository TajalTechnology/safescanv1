import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <NavLink to={'/dashboard'}>Dashboard</NavLink>
            <NavLink to={'/admins'}>Admins</NavLink>
        </div>
    );
};

export default Sidebar;