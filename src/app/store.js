import { configureStore } from '@reduxjs/toolkit';
import { testReduser} from '../feauchers/test/testSlise'
export default configureStore({
  reducer: {
    test: testReduser,
  },
});
