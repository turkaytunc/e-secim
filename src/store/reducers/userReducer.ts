import { UserActions } from '../actions/UserActions';
import { IUser } from '../interfaces/IUser';

export const userReducer = (state: IUser, action: UserActions): IUser => {
  switch (action.type) {
    case 'ADD_TC': {
      return { ...state, tc: action.payload };
    }
    case 'ADD_TC_HASH': {
      return { ...state, tcHash: action.payload };
    }
    default:
      return state;
  }
};
