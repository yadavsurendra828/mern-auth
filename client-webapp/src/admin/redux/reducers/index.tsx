import { combineReducers } from 'redux';

import { auth } from './auth.reducer';
import { alert } from './alert.reducer';

// export * from "./users.reducer";
// export * from "./alert.reducer";

const initialState = {
  sidebarShow: true,
}

const changeState = (state = initialState, { type, ...rest }: any) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const rootReducer = combineReducers({
    changeState,
    auth,
    alert
  });
  
  export default rootReducer;
