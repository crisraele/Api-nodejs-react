import { categoriaReducer } from './categoriaReducer';
import { marcaReducer } from './marcaReducer';
import { produtoReducer } from './produtoReducer';
import { combineReducers } from 'redux';


export const Reducers = combineReducers({
  categoriaState:  categoriaReducer, 
  marcaState: marcaReducer,
  produtoState: produtoReducer

});
