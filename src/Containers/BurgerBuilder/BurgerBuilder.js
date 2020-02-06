import React, { Fragment } from 'react';
import Burger from '../../Components/Burger/Burger';

const burgerBuilder = () => {

    //const [ingredients, setIngredients] = useState({});

    // setIngredients({
    //     salad: 1,
    //     bacon: 1,
    //     cheese: 1,
    //     meat: 2
    // })

    // return (
    //     <Fragment>
    //         <Burger ingredients={ingredients} />
    //         <div>Builder controls</div>
    //     </Fragment>
    // );
    return (
        <Fragment>
            <Burger />
            <div>Builder controls</div>
        </Fragment>
    );
};

export default burgerBuilder;