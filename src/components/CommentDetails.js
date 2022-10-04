import React from "react";

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.imageSrc} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.authorName}
        </a>
        <div>
          <a href="/" className="author">
            Bird:{props.authorsAnimal}{" "}
          </a>
        </div>
        <div>
          <a href="/" className="author">
            Music:{props.authorsMusic}
          </a>
        </div>

        <div className="metadata">
          <span className="date">
            {props.timeAgo} on {props.mnth}
          </span>
        </div>
        <div className="text">{props.txt}</div>

        <div>City Author Lives in : {props.city}</div>
      </div>
    </div>
  );
};
export default CommentDetail;
