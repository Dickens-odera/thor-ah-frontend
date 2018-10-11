import React, { Component } from "react";
import { connect } from "react-redux";
// actions
import getArticle from "../../actions/article";
// styles
import styles from "./ArticleTag.module.scss";

class ArticleTag extends Component {
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
    const { article } = this.props;
    const { tags } = article;
    return (
      <div className="text-left">
        {tags.map(tag => (
          <button key={tag} type="button" className={styles.btn_round}>
            {tag.tag}
          </button>
        ))}
      </div>
    );
  }
}
/**
 * mapStateToProps
 * @param state
 * @returns {Object}
 */
const mapStateToProps = state => ({
  article: state.article.article
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
)(ArticleTag);
