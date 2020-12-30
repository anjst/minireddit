import React, { useEffect } from 'react'
import './feed.css'
import { Post } from '../post/post'
import { useSelector } from 'react-redux'
import { searchReddit } from '../actions/productActions'
import { useDispatch } from 'react-redux'



export function SearchFeed( { match } ) {

    const dispatch = useDispatch();   

    const loading = useSelector(state => state.loading)

    useEffect(() => {
        let search = match.params.searchResult.split(' ')
        search = search.join('%20')
        dispatch(searchReddit(search))
    },[dispatch, match])

    const childrens = useSelector(store => store.childrens)
    const errorState = useSelector(store => store.error)
    
    if(loading) {
        return (
        <div className="parentLoading">
            <div className="loadingImage">
            </div>
        </div>
        );
    }

    if(errorState === false) {
        return (
        <div className="parentLoading">
            <div>No Results</div>
        </div>
        );
    }

    return (
        <div className="feed">
        {childrens.map(child => {
            return <Post key={child.data.created}
            author={child.data.author} 
            date={child.data.created}
            title={child.data.title}
            upvote={child.data.ups}
            subreddit={child.data.subreddit}
            data={child.data}
            comments={child.data.num_comments}
             />
        })}
        </div>
    )
}