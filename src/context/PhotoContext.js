import { createContext, useReducer } from 'react';

export const PhotoContext = createContext();

export const photoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PHOTOS':
      return {
        photos: action.payload
      };
    case 'ADD_PHOTO':
      return {
        photos: [action.payload, ...state.photos]
      };
    default:
      return state;
  }
}

export const PhotoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(photoReducer, {
    photos: null
  });

  return (
    <PhotoContext.Provider value={{...state, dispatch}}>
      { children }
    </PhotoContext.Provider>
  )
}