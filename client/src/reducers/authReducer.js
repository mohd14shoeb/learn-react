import { FETCH_USER } from '../actions/types';

/**
 * Inside here, we create a reducer and immidiately export it.
 * A reducer, must be pure function, it must not mutate input data.
 * Reducer takes previous state and action, then return next state.
 */

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
