// Import action types
import { FETCH_NEWS, FETCH_NEWS_RECEIVED, FETCH_NEWS_FAILED } from "./constants"

const initialState: any = {
    isLoading: false,
    posts: []
}

// This is the reducer
export default (state = initialState, { type, payload }: any): any => {

    switch (type) {
        case FETCH_NEWS:
            return { ...state, ...payload, isLoading: true }
        case FETCH_NEWS_RECEIVED:
            return { ...state, ...payload, isLoading: false }
        case FETCH_NEWS_FAILED:
            return { ...state, ...payload, isLoading: false }
        default:
            return state
    }
}


// ####################
// State structure

const structure = {
    isLoading: true, // BOOL
    error: {
        isError: false, //BOOL
        msg: "" // STRING
    },
    posts: [ // Array of objects
        { author: "", title: "", description: "" },
        {}
    ]
}