import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <div className={classes.Toolbar}>
        <div>Menu</div>
        <Logo />
        <NavigationItems />
    </div>
)

export default toolbar;