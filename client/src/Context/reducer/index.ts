import { Reducer } from 'react';

export interface DataStudent {
  _id: string;
  id: number;
  gioitinh: string;
  ngaysinh: Date;
  diachi: string;
  idGV: string;
  email: string;
  hoten: string;
}

export interface AppAction {
  type: string;
  payload: any;
}

export const reducer: Reducer<DataStudent[], AppAction> = (state, action) => {
  const { type } = action;
  switch (type) {
    case 'SET_LIST_STUDENT':
      return action.payload;
    default:
      return state;
  }
};
