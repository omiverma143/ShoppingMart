
import { configureStore   }   from "@reduxjs/toolkit"
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    cartState: cartReducer,
    // other state reducer
  },
});
