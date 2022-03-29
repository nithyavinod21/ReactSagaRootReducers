import {combineReducers} from 'redux';

import foodItemReducer from './food_item';

import postItemReducer from './post_item';

const rootReducer=combineReducers({

    foodItemReducer,
    postItemReducer

})



export default rootReducer;