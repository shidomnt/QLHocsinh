import { DataStudent } from ".";

export const setListStudent = (payload: DataStudent[]) => {
  return {
    type: 'SET_LIST_STUDENT',
    payload,
  };
};


