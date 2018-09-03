import {combineReducers} from 'redux';
import page from './page';
import discover from './discover';
import cart from './cart'
import person from './person'

import category from './category'

let reducer = combineReducers({
    page,
    category,
    discover,
    cart,
    person
});
export default reducer;
