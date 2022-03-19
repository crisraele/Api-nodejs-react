

const initialState = {
  newValue: ''
};


export const categoriaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CATEGORIA':
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
};
