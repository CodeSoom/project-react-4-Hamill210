import { configureStore } from '@reduxjs/toolkit';

import reducer from './reducers/slice';

const store = configureStore({ reducer });

export default store;
