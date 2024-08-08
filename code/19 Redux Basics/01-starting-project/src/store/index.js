import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
// export const INCREMENT = 'increment';

const initialState = {
  counter: 0,
  showCounter: true,
};

createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    incrementBy5(state, action) {
      state.counter = state.counter + action.amount;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
})

const conuterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'incrementBy5') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if(action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(conuterReducer);

export default store
