import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalProvider';

export const useGlobal = () => {
  return useContext(GlobalContext);
};
