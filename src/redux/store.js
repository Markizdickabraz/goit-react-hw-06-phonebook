import { configureStore} from "@reduxjs/toolkit";
import { contactsReducer } from "./contactSlice";
import { filterReducer } from "./filterSlice";
import { nameReducer } from "./nameSlice";
import { numberReducer } from "./numberSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
    storage,
}
 
const persistContactsReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
    reducer: {
        contacts: persistContactsReducer,
        filter: filterReducer,
        name: nameReducer,
        number: numberReducer,
   },
});

export const persistor = persistStore(store);
