import initialState from './initialState';

const testReducer = (state = initialState.test, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default testReducer;
