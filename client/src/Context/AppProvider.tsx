import axios from 'axios';
import React, { createContext, useEffect, useReducer } from 'react';
import { AppAction, DataStudent, reducer } from './reducer';
import { setListStudent } from './reducer/action';
import { apiUrl } from './reducer/constant';

export const AppContext = createContext<DataStudent[] | null>(null);
export const AppDispatchContext =
  createContext<React.Dispatch<AppAction> | null>(null);

export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    axios.get<{listHs: DataStudent[]}>(`${apiUrl}/dshs/${'UDPM1'}`)
      .then((response) => {
      dispatch(setListStudent(response.data.listHs));
      })
      .catch((error) => {
        console.log(error);
        dispatch(setListStudent([]));
      })
  }, []);

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppContext.Provider value={state}>{children}</AppContext.Provider>
    </AppDispatchContext.Provider>
  );
};
