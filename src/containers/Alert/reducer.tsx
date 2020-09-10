// Import action types
import { SET_ALERT, REMOVE_ALERT } from "./constants"

const initialState = [
    { id: 1, title: "hi", msg: "nothing to see here", type: "success", time: new Date() }
]


// Eventually need to type this correctly
export default (state = initialState, { type, payload }: any): any => {

    switch (type) {
        case SET_ALERT:
            return [...state, ...payload]

        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload.id)

        default:
            return state
    }
}
