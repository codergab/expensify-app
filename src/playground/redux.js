import { createStore } from 'redux';

// Action Generators
const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET',
    count: 0
});

const setcount = ({ count }) => ({
    type: 'SET',
    count
});

const countReducer = ((state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };

        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        
        case 'SET':
            return {
                count: action.count
            };

        case 'RESET':
            return {
                count: 0
            };
    }   
});

const store = createStore(countReducer);

const unsubscibe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(incrementCount());