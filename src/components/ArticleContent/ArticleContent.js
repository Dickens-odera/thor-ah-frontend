import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import format from "date-fns/format";
// components
import ArticleReaction from "../ArticleReaction/ArticleReaction";
import ArticleComment from "../ArticleComment/ArticleComment";
import ArticleTag from "../ArticleTag/ArticleTag";
import ArticleLoader from "../ArticleLoader";
// actions
import getArticle from "../../actions/article";
// styles
import styles from "./ArticleContent.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// images
import profileImage from "../../assets/profile.png";
import pointIcon from "../../assets/circle.png";
import bannerImage from "../../assets/image.png";

class ArticleContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const articleSlug = window.location.pathname.split("/articles/")[1];
    const { fetchArticle } = this.props;
    fetchArticle(articleSlug);
  }

  render() {
    const { article, loading } = this.props;
    return <div className="card col-md-7 p-0">
        {loading ? <div>
            <ArticleLoader />
          </div> : <div>
            <img className="card-img-top" src={bannerImage} alt="banner" width="100%" />
            <div className="content p-5 ">
              <h3 className="h1 text-left">{article.title}</h3>
              <div className="d-flex justify-content-start">
                <div>
                  <img src={profileImage} className="rounded-circle" alt="profile" />
                </div>
                <div className={`${styles.article_text} d-flex px-2 flex-column `}>
                  <span className="text-center">
                    {" "}
                    {article.author.username}{" "}
                  </span>
                  <span className="font-italic">
                    {format(new Date(article.createdAt), ["MMM DD"])}
                  </span>
                </div>
                <div className="my-3 text-secondary">
                  <img src={pointIcon} alt="icon" height="7px" />
                  <span className="pl-1">
                    {`${(article.timeToRead)} min read`}
                  </span>
                </div>
              </div>
              <div className={`${styles.content} text-left mt-2`}>
                <p>{article.body}</p>
              </div>
              <ArticleTag />
              <ArticleReaction />
              <hr className={styles.divider} />
              <ArticleComment />
            </div>
          </div>}
      </div>;
  }
}

ArticleContent.propTypes = {
  fetchArticle: PropTypes.func.isRequired
};

/**
 * mapStateToProps
 * @param state
 * @returns {Object}
 */
const mapStateToProps = state => ({
  article: state.article.article,
});

/**
 * mapDispatchToProps
 * @param mapDispatchToProps
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => ({
  fetchArticle(articleSlug) {
    dispatch(getArticle(articleSlug));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleContent);
