const initialState = {
}

// Eventually need to type this correctly
export default (state = initialState, { type, payload }: any): any => {

    console.log(state)
    switch (type) {
        case "ABC":
            return { ...state, ...payload }

        default:
            return state
    }
}
