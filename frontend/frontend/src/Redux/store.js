import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";

import thunk from "redux-thunk";
import { adminReducer } from "./AdminRedux/Admins/admin.reducer";
import { cartReducer } from "./AdminRedux/Cart/cart.reducer";
import { FlowerReducer } from "./AdminRedux/Products/AnniversaryFlowers/AnniversaryFlowers.reducer";
import { CakeReducer } from "./AdminRedux/Products/BirthDayCakes/BirthDayCakes.reducer";
import { PlantReducer } from "./AdminRedux/Products/SympathyPlants/SympathyPlants.reducer";
import { userReducer } from "./AdminRedux/Users/user.reducer";
import CARTREDUCER from "./CART-REDUX/cart.reducer";
import checkoutReducer from "./CHECKOUT-REDUX/checkout.reducer";

let rootReducer = combineReducers({
  userManager: userReducer,
  adminManager: adminReducer,
  plantManager: PlantReducer,
  cakeManager: CakeReducer,
  flowerManager: FlowerReducer,
  cartManager: cartReducer,
  cart:CARTREDUCER,
  checkout:checkoutReducer
});

let composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export let store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
