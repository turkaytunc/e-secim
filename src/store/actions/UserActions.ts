export type UserActions =
  | {
      type: 'ADD_TC';
      payload: string;
    }
  | {
      type: 'ADD_TC_HASH';
      payload: string;
    };
