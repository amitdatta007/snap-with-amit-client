import React from 'react';
import { NavLink } from "react-router-dom";

const NavItem = ({name, path, setOpen}) => {
    return (
        
            <NavLink onClick={() => setOpen(false)} className={`${(isActive) => isActive ? 'active' : null} hover:text-primary`} to={path}>{name}</NavLink>
        
    );
};

export default NavItem;