import React from "react";
import AuthorNames from "./AuthorNames";


const CommentDetail = (props) => {
   
    return (

        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src ={props.imageSrc}/>
          </a>
          <div className="content">
            <a href="/" className="author">
            {props.authorName} likes <AuthorNames />
              
            </a>
            <div className="metadata">
              <span className="date">{props.timeAgo} on {props.mnth}</span>
            </div>
            <div className="text">{props.txt}</div>
            <div>City Auther Lives in : {props.city}</div>
          </div>
        </div>

        

    );
};
export default CommentDetail;