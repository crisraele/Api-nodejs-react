

const initialState = {
  newValue: ''
};


export const produtoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUTO':
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
};
