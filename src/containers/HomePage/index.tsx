
import React from 'react'
import { connect } from 'react-redux'
import { getNews } from './actions'


export const Home = (props: any) => {

    // We get the posts props from mapStateToProps below
    const { posts } = props

    console.log("props", props);

    // if (!articles) return null


    return (
        <div>

            <h1>this is the home page</h1>

            <button onClick={props.getNews}>Show front page of HN</button>

            <ul>
                {posts && posts.map((article: any) => {
                    return (<li key={article.url}>{article.title}</li>)
                })}
            </ul>




        </div>
    )
}

// #######################
// REDUX STUFF 
// Read from state & add actions to update state
// #######################


// GET DATA FROM REDUX STORE
// This maps anything from our store to props in this particular component
// The "ownProps" parameter gives us access to any props passed to this component
const mapStateToProps = (state: any, ownProps: any) => {

    // console.log("state", state);
    return {
        posts: state.news.posts
    }
}

const mapDispatchToProps = {
    getNews
};

// connect() takes two paramters
// 1. add state to props object (to read from state)
// 2. add functions / actions to props object (to write to state)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
