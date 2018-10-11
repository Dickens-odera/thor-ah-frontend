import React from "react";
import ArticleReaction from "../ArticleReaction/ArticleReaction";
import ArticleComment from "../ArticleComment/ArticleComment";
import ArticleTag from "../ArticleTag/ArticleTag";
// styles
import styles from "./ArticleContent.module.scss";
// images
import profileImage from "../../assets/profile.png";
import pointIcon from "../../assets/circle.png";
import bannerImage from "../../assets/image.png";

const ArticleContent = () => (
  <React.Fragment>
    <div className="card col-md-7 p-0">
      <img className="card-img-top" src={bannerImage} alt="banner" width="100%" />
      <div className="content p-5 ">
        <h3 className="h1 text-left">
          The Most Amazing Article You Have Ever Read.
        </h3>
        <div className="d-flex justify-content-start">
          <div>
            <img src={profileImage} className="rounded-circle" alt="profile" />
          </div>
          <div className={`${styles.article_text} d-flex px-2 flex-column `}>
            <span className="text-center font-weight-bold">Jane Doe</span>
            <span className="text-center font-italic">12th, Sept </span>
          </div>
          <div className="my-3 text-secondary">
            <img src={pointIcon} alt="icon" height="7px" />
            <span className="pl-1">4 min read</span>
          </div>
        </div>
        <div className={`${styles.content} text-left mt-2`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br />
            <br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
            ea commodi
            <br />
            <br />
            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
            velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
            fugiat quo voluptas nulla pariatur?
          </p>
        </div>
        <ArticleTag />
        <ArticleReaction />
        <hr className={ styles.divider } />
        <ArticleComment />
      </div>
    </div>
  </React.Fragment>
);

export default ArticleContent;
