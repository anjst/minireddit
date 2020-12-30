
import {
    FETCH_REDDIT_BEGIN,
    FETCH_REDDIT_SUCCESS,
    FETCH_REDDIT_FAILURE
  } from '../components/actions/productActions';
  

const initialState = {
    title: 'Hello World',
    upvotes: '100',
    date: '2020-20-11',
    comments: '300',
    author: 'Dixie3B',
    loading: true,
    url: 'https://v.redd.it/gd1n1zr6da561/DASH_96.mp4',
    subreddit: 'Cyberpunk',
    childrens: [],
}



const titleReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_REDDIT_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            }; 
        case FETCH_REDDIT_SUCCESS:
            return { 
                ...state,
                loading:false,
                subreddit: action.payload.subreddit,
                author: action.payload.author,
                childrens: action.payload.childrens

            };
        case FETCH_REDDIT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;

    }
}



export default titleReducer;