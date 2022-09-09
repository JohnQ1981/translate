import React from "react";
import AuthorNames from "./AuthorNames";
import { faker } from '@faker-js/faker';

const CommentDetail = () => {
    return (

        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src ={faker.image.avatar()}/>
          </a>
          <div className="content">
            <a href="/" className="author">
              <AuthorNames />
            </a>
            <div className="metadata">
              <span className="date">Today at 6:00PM</span>
            </div>
            <div className="text">Nice blog post!</div>
          </div>
        </div>

        

    );
};
export default CommentDetail;