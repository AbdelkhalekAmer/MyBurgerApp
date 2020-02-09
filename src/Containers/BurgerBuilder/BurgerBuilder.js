import React, { Fragment, useState } from 'react';
import Burger from '../../Components/Burger/Burger';

const BurgerBuilder = () => {

    const [ingredients, setIngredients] = useState(() => {
        return {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 2
        }
    });

    return (
        <Fragment>
            <Burger ingredients={ingredients} />
            <div>Builder controls</div>
        </Fragment>
    );
};

export default BurgerBuilder;