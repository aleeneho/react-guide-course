const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};

const store = redux.createStore(counterReducer);


const counterSubcriber = () => {
  const latestState = store.getState();

};

store.subscribe(counterSubcriber);

store.dispatch({type: 'increment'});
