import { createStore } from 'redux';
import cakeReducer from "./cakes/cake.reducer";

const store = createStore(cakeReducer)

export default store

