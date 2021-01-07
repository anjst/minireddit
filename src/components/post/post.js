import React from "react";
import "./post.css";
import upDowna from "../../images/updowna.png";
import Comment from "../../images/comment4.png";
import timeago from "epoch-timeago";

export function Post(props) {
  const timeDiff = timeago(props.date * 999.98299);

  let num = parseInt(props.upvote);

  let numFormatter = () => {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(0) + "k"; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(0) + "M"; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  };

  let content = () => {
    if (props.data.secure_media) {
      if (props.data.secure_media.oembed) {
        return (
          <img
            id="image"
            alt="feed"
            src={props.data.secure_media.oembed.thumbnail_url}
          />
        );
      } else {
        return (
          <video id="image" controls>
            <source
              src={props.data.secure_media.reddit_video.fallback_url}
              type="video/mp4"
            />
          </video>
        );
      }
    }
    if (
      props.data.url.includes(".jpg") ||
      props.data.url.includes(".png") ||
      props.data.url.includes(".gif")
    ) {
      return <img id="image" alt="feed" src={props.data.url} />;
    } else {
      return (
        <div className="parentLink">
          <a className="childLink" href={props.data.url}>
            {props.data.url.substring(0, 30)}...
          </a>
        </div>
      );
    }
  };

  return (
    <div className="post">
      <div className="containers">
        <div className="post-content">
          <div className="voter">
            <img className="arrow" src={upDowna} alt="arrow" />
            <p>{numFormatter()}</p>
          </div>
          <li>posted by u/{props.author}</li>
          <li>{timeDiff}</li>
          <h3>{props.title}</h3>
          {content()}
          <img className="imagetwo" alt="comment-icon" src={Comment} />
          <p>{props.comments}</p>
          <p className="comments">Comments</p>
        </div>
      </div>
    </div>
  );
}
