// Define functions that return functions to run from the component. 
// The component must include these functions in the mapDispatchToProps section of connect())

import { FETCH_NEWS } from "./constants"

// This function returns a function
export const getNews = () => ({
    type: FETCH_NEWS,
    payload: null
});

