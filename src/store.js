import { createStore } from "redux";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import AsyncStorage from "@react-native-community/async-storage";
import hardSet from "redux-persist/es/stateReconciler/hardSet";

import rootReducer  from './reducers'


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: hardSet
};


const pReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(pReducer)
export const persistor=  persistStore(store)