
import types from "../types";

export const dashboardReducer = (state = { loading: false, success: false, widgetList: {}, error: '' }, action) => {
    switch (action.type) {
        case types.widgetListUpdateRequest:
            return { loading: true }
        case types.widgetListUpdateSucceess:
            return { loading: false, success: true, widgetList: action.payload };
        case types.widgetListUpdateFail:
            return { loading: false, error: action.payload };
        case 'SET_SUCCESS_FALSE':
            return { loading: false, success: false, error: false };
        default:
            return state;

    }
}