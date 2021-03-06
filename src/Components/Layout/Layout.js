import React, { Fragment } from 'react';
import classes from './Layout.module.css';

const Layout = props => {
    return (<Fragment>
        <div>Toolbar, Side drawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Fragment>);
};

export default Layout;