import React from 'react';
// styles
// images
import dotIcon from "../../assets/dot.png";
import likeIcon from "../../assets/up.png";
import dislikeIcon from "../../assets/down.png";
import commentIcon from '../../assets/comment.png';

const ArticleReaction = () => (
  <div className="d-flex justify-content-end">
    <div className="px-2">
      <img src={likeIcon} alt="icon" />
      <span>1.3K</span>
    </div>
    <div className="px-2">
      <img src={dislikeIcon} alt="icon" />
      <span>3</span>
    </div>
    <div className="px-2">
      <img src={commentIcon}alt="icon" />
      <span>145</span>
    </div>
    <div>
      <img src={dotIcon} alt="icon" />
    </div>
  </div>
);

export default ArticleReaction;
