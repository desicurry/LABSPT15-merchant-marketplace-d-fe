import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import addProductReducer from './addProductReducer';
import updateProductReducer from './updateProductReducer';
import addItemImageReducer from './addItemImageReducer';
import sellerInfoReducer from './sellerInfoReducer';
import tagsReducer from './tagsReducer';
import addItemTagReducer from './addItemTagReducer';

const reducers = combineReducers({
  products: productsReducer,
  addProduct: addProductReducer,
  updatedProduct: updateProductReducer,
  addItemImage: addItemImageReducer,
  sellerInfo: sellerInfoReducer,
  tags: tagsReducer,
  addItemTag: addItemTagReducer,
});

export default reducers;
