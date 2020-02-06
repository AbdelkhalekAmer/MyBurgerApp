import React, { Fragment } from 'react';
import Burger from '../../Components/Burger/Burger';

const burgerBuilder = props => {
    return (
        <Fragment>
            <Burger />
            <div>Builder contros</div>
        </Fragment>
    );
};

export default burgerBuilder;