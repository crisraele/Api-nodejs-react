

const initialState = {
  newValue: ''
};


export const marcaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MARCA':
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
};
