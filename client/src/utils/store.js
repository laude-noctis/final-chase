import { createStore } from 'redux';

import reducer from './reducers';

export default createStore(reducer, {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
});

