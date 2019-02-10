import { createStore } from "redux";

// Action Genertors - functions that returns action objects

const incrementBy = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementBy = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});


const store = createStore((state = { count: 0}, action) => {

    switch (action.type) {
        case 'INCREMENT':
            
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: state.count = 0
            };
        case 'SET':
            return {
                count: state.count = action.count
            };
        default:
            return state;
    }
});

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementBy({ incrementBy: 10 }));

store.dispatch(incrementBy());

store.dispatch(resetCount());

store.dispatch(decrementBy({ decrementBy: 10}));
store.dispatch(decrementBy());

store.dispatch(setCount({ count: 100}));

