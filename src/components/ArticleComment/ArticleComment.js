import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// styles
import styles from './ArticleComment.module.scss';
import "bootstrap/dist/css/bootstrap.min.css";
// components
import CommentBox from '../Comment/CommentBox';
import Comments from '../Comment/Comments';
// actions
import { getArticleComments } from '../../actions/comments';

export class ArticleComment extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { fetchArticleComments } = this.props;
    const articleSlug = window.location.pathname.split('/articles/')[1];
    fetchArticleComments(articleSlug);
  }

  render() {
    const { comments, fetchingArticleComments, error } = this.props;
    return (
      <div className={styles.comment}>
        <CommentBox />
        {fetchingArticleComments ?
          <i className={`fa fa-spinner fa-3x fa-spin ${styles.loading}`} /> :
          <Comments comments={comments} />
        }
        {error ?
          <span style={{color: 'red'}}>
            Unable to fetch comments at this time. Try reloading this page
          </span> :
          ''
        }
      </div>
    );
  }
}

ArticleComment.propTypes = {
  fetchArticleComments: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  fetchingArticleComments: PropTypes.bool.isRequired,
  error: PropTypes.any.isRequired,
}

const mapStateToProps = (state) => ({
  comments: state.comments.articleComments.data,
  fetchingArticleComments: state.comments.articleComments.loading,
  error: state.comments.articleComments.error,
})

const mapDispatchToProps = (dispatch) => ({
  fetchArticleComments(articleSlug) {
    return dispatch(getArticleComments(articleSlug));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleComment);
