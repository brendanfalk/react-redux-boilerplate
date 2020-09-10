
import { v4 as uuid } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './constants';

// setAlert returns a new function that dispatches a SET_ALERT event
export const setAlert = (msg: string, alertType: string) => (dispatch: any) => {

    const id = uuid();

    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id }
    })
}


// WORK OUT WTF IS GOING WRONG
// IT IS LIKELY BECAUSE OF REDUX SAGAS!!!
