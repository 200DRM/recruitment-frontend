import { createContext } from 'react';

interface IProps {
  loading: boolean;
  setLoading: (state: boolean) => void;
}

export const LoginContext = createContext({} as IProps);
