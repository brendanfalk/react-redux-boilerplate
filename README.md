
# React-Redux Boilerplate <!-- omit in toc --> 

Table of Contents
- [Get started](#get-started)
- [Scripts](#scripts)
- [Project Structure (under `src/`)](#project-structure-under-src)
- [How Redux / Redux-Saga Works](#how-redux--redux-saga-works)
  - [Store](#store)
  - [Reducer](#reducer)
  - [Actions](#actions)
  - [Saga](#saga)
  - [Constants](#constants)
- [Connecting Redux to Each Component / Container](#connecting-redux-to-each-component--container)
- [Setting Up a New Container](#setting-up-a-new-container)
- [TODO:](#todo)

## Get started
```shell
git clone https://github.com/falky97/react-redux-boilerplate.git 
cd react-redux-boilerplate
npm install
npm start
open http://localhost:3000  (should start automatically )
```

## Scripts
* `npm start` -> Launch app in development mode at http://localhost:3000
* `npm run build` -> Build app for production in `build` folder  

You can also use the standard Create React App Scripts (like `npm test`, `npm run eject`)


## Project Structure (under `src/`)

The project followers the container/component architecture. 
* `containers/` contains React components which are connected to the redux store. 
  * `_App/` contains all the routing logic + layout for the app + sets up the global Redux store.
  * `HomePage/` is a good example of a container that connects to Redux with reducers, sagas, 
* `components/` contains dumb React components which depend on containers for data. 
* `redux/` 
  * `rootReducer.tsx` Aggregates all the reducers from each container
  * `rootSaga.tsx` Aggregates all the sagas from each container
  * `configureStore.tsx` Imports the rootReducer and rootSaga and configures the Redux Store
* `index.tsx` Renders the React App to the DOM and establishes the Redux store
* `assets/` contains images, videos, documents etc


## How Redux / Redux-Saga Works

I found this fucking hard. Honestly I still don't fully get it and this is probably wrong, but it's how I think about it (create an issue if I'm wrong)

### Store
This is the global "state" for your application. It is the source of truth for data. It is what is passed down to your React components. When data in the store changes, your components that are connected to the store also change.

### Reducer
This is a function which lets you edit your store. This is the only thing that can "edit" your store

### Actions
This is a function used by a component (somewhere in the HTML / JSX). It talks to the reducer by passing it an action type (e.g. FETCH_POSTS) and optionally a payload (any relevant data). 

### Saga
A saga is middleware for Redux. It intercepts your actions. Usually it does something (like an API request) then calls some more actions based on the result. e.g. you may have an action FETCH_POSTS. The reducer will just update the store to say it is loading. A saga will intercept the action, it will run the API call for you and get the output. It will then run another action based on the output (e.g. FETCH_POSTS_RECEIVED with the payload of the posts JSON or FETCH_POSTS_FAILED with a payload of an error message). As always, this action will be passed to the reducer to update the store.

### Constants
"FETCH_POSTS", "FETCH_USERS", "FETCH_POSTS_FAILED" etc are vulnerable to spelling mistakes. We create a separate file called constants, and then import them to reducer.js, actions.js, and saga.js to avoid getting errors due to spelling mistakes.


## Connecting Redux to Each Component / Container

This is a little trickier than I thought. It's not like you just get a global variable that you can use anywhere (like Vue). Instead, you import the state you want and the actions you want, and then add them to your component's `props` property.

You can sort of think of this step as:
1. What data should this component be able to read from the store
2. What actions should this component be able to make that can update the store


You can see a good example in [`src/HomePage/index.tsx`](src/HomePage/index.tsx)



1. Import `react-redux` to subscribe the component to redux
```jsx
import { connect } from 'react-redux'
```

2. Import any actions you want the component to be able to perform
```jsx
import { getNews } from './actions'
```

3. Decide what state and which actions the component will use. Connect it to the component when you do export default
```jsx
const mapStateToProps = (state: any, ownProps: any) => {

    return {
        posts: state.news.posts
    }
}

const mapDispatchToProps = {
    getNews
};


export default connect(mapStateToProps, mapDispatchToProps)(Home)
```

So in the above, I gave the home component access to:
1. The Store for state.news.posts --> accessible through `props.posts`; and
2. The Action getNews --> accessible through `props.getNews`


## Setting Up a New Container
I would suggest duplicating the `src/HomePage/` container. 


## TODO:

[] Build a more robust UI that does a few more things with HN
[] Set up Sagas with Auth. I feel like I using data from the store in a Saga may not work e.g. making authenticated API calls.