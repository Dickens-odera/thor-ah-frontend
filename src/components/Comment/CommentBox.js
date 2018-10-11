import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './comment.module.scss';
import createComment from '../../actions/comments';

class CommentBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: '',
      showError: false,
    };

    this.submitComment = this.submitComment.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
  }

  handleTextAreaChange(event) {
    this.setState({
      comment: event.target.value,
      showError: false,
    });
  }

  submitComment(event) {
    event.preventDefault();
    const { comment } = this.state;
    if (comment.length < 1) return;

    const articleSlug = window.location.pathname.split('/articles/')[1];
    // hide any errors
    this.setState({
      showError: false,
    });

    const { handleCommentSubmit } = this.props;
    handleCommentSubmit(comment, articleSlug)
      .then((result) => {
        if (result.data && result.data.status === 'success') {
          return this.setState({
            comment: ''
          });
        }
        return this.setState({
          showError: true,
        })
      });
  }

  render() {
    const { comment, showError } = this.state;
    const { loading, error } = this.props;
    return (
      <form onSubmit = {this.submitComment} >
        <div className={styles.field}>
          <div className="control">
            <textarea
              className="form-control p-3"
              id="comment"
              placeholder="Join the conversation..."
              rows={3}
              value={comment}
              onChange={this.handleTextAreaChange}
            />
          </div>
          {showError && error ? <span style={{color: 'red'}}>Unable to post comment at this time. Try again</span> : ''}
          {/* display submit button only as soon as user starts typing */}
          {comment ? <button className={`btn btn-success ${styles.submit}`} type="submit" disabled={loading}>submit</button> : ''}
        </div>
      </form>
    );
  }
}

CommentBox.propTypes = {
  handleCommentSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.comments.newComment.loading,
  error: state.comments.newComment.error,
})

const mapDispatchToProps = (dispatch) => ({
  handleCommentSubmit(comment, slug) {
    return dispatch(createComment(comment, slug));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);
