import { dashboardReducer } from "./reducer/dashboardReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

const allReducers = combineReducers({
    widgetData: dashboardReducer,
});
const middleware = [thunk];
const store = createStore(
    allReducers,
    applyMiddleware(...middleware)
);

export default store;