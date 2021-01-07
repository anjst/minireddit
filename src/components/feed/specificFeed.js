import React, { useEffect } from "react";
import "./feed.css";
import { Post } from "../post/post";
import { useSelector } from "react-redux";
import { fetchReddit } from "../actions/productActions";
import { useDispatch } from "react-redux";

export function SpecificFeed({ match }) {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchReddit(match.params.id));
  }, [dispatch, match]);

  const childrens = useSelector((store) => store.childrens);

  if (loading) {
    return (
      <div className="parentLoading">
        <div className="loadingImage"></div>
      </div>
    );
  }

  return (
    <div className="feed">
      {childrens.map((child) => {
        return (
          <Post
            key={child.data.created}
            author={child.data.author}
            date={child.data.created}
            title={child.data.title}
            upvote={child.data.ups}
            subreddit={child.data.subreddit}
            data={child.data}
            comments={child.data.num_comments}
          />
        );
      })}
    </div>
  );
}
