import { DirectoryActionTypes } from './shop.types';

export const setCurrentDirectory = (directory) => ({
  type: DirectoryActionTypes.SET_CURRENT_DIRECTORY,
  payload: directory,
});
