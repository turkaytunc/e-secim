import React from 'react';
import { UserActions } from './actions/UserActions';
import { IUser } from './interfaces/IUser';
import { userReducer } from './reducers/userReducer';

type InitialStateType = {
  user: IUser;
};

const initialState = {
  tc: '',
  tcHash: '',
  hasVote: true,
};

const rootReducer = ({ user }: InitialStateType, action: UserActions) => ({
  user: userReducer(user, action as UserActions),
});

export const Store = React.createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<UserActions>;
}>({
  state: (initialState as unknown) as InitialStateType,
  dispatch: () => null,
});

export const StoreProvider: React.FC = (props: { children?: React.ReactNode }): JSX.Element => {
  const [state, dispatch] = React.useReducer(rootReducer, (initialState as unknown) as InitialStateType);

  return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>;
};
