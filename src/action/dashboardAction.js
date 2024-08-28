import types from '../types';


export const updateWidget = (updatedData) => async (dispatch) => {
    try {
        dispatch({
            type: types.widgetListUpdateRequest,
        });
        dispatch({
            type: types.widgetListUpdateSucceess,
            payload: updatedData,
        });
    } catch (error) {
        dispatch({
            type: types.bookDetailUpdateFail,
            payload: 'Error updating Data',
        });
    }
};

export const setSuccessfalse = () => (dispatch) => {
    dispatch({
        type: 'SET_SUCCESS_FALSE',
    });
}

// export const getWidgetList = () => async (dispatch) => {
//     try {
//         dispatch({
//             type: types.widgetListRequest,
//         });
//         dispatch({
//             type: types.widgetListSucceess,
//             payload: ,
//         });
//     } catch (error) {
//         const message = 'Error'
//         dispatch({
//             type: types.widgetListFail,
//             payload: message,
//         });
//     }
// };