/* eslint-disable */
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import axios from "axios";
import PropTypes from "prop-types";
import createArticle from "../../actions/articleAction";
import ArticleTitle from "./ArticleTitle";
import TextEditor from "./TextEditor";
import styles from "./CreateArticle.module.scss";

class CreateArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Title",
      body: "Share your thoughts...",
      description: "",
      error: {}
    };
  }

  titleChangeHandler = title =>
    this.setState({
      title
    });

  editorChangeHandler = body =>
    this.setState({
      body
    });

  titlePlaceholderFocusInHandler = () => {
    const { title } = this.state;
    if (title.trim() === "Title") {
      this.setState({ title: "" });
    }
  };

  titlePlaceholderFocusOutHandler = () => {
    const { title } = this.state;
    if (title.trim() === "") {
      this.setState({
        title: "Title"
      });
    }
  };

  bodyPlaceholderFocusInHandler = () => {
    const { body } = this.state;
    if (
      body.trim() === "Share your thoughts..." ||
      body.trim() === "<p>Share your thoughts...</p>"
    ) {
      this.setState({
        body: ""
      });
    }
  };

  bodyPlaceholderFocusOutHandler = () => {
    const { body } = this.state;
    if (body.trim() === "") {
      this.setState({
        body: "Share your thoughts..."
      });
    }
  };

  imageUploadHandler = (blobInfo, success, failure) => {
    try {
      const formData = new FormData();
      formData.append("file", blobInfo.blob());
      formData.append("upload_preset", "asgjqcgx");
      formData.append("api_key", "329369412183662");
      const uploadUrl =
        "https://api.cloudinary.com/v1_1/dn6fnuhxr/image/upload";
      return axios
        .post(uploadUrl, formData, {
          headers: {
            "Content-Type": "Application/x-www-form-urlencoded",
            "X-Requested-With": "XMLHttpRequest"
          }
        })
        .then(response => {
          const data = response.data;
          const fileUrl = data.secure_url;
          success(fileUrl);
        });
    } catch (error) {
      failure("file upload failed");
    }
  };

  validateArticle = () => {
    const { title, body } = this.state;
    const bodyValue = this.rootNode.props.value;

    if (title === "Title") return false;
    if (body === "Share your thoughts..." || bodyValue.length < 30)
      return false;

    return true;
  };

  handleSubmit = () => {
    const { title, body } = this.state;
    const articleData = {
      title,
      body,
      description: "Some description"
    };
    console.log(body);

    this.setState({
      title: "Title",
      body: "Share your thoughts..."
    });

    this.props.createArticle(articleData);

    // if (respose) {
    //   switch (response.status) {
    //     case 201:
    //       history.pushState("/");
    //       break;
    //     case 401:
    //       history.push("/login");
    //     case 403:
    //       history.push("/");
    //     default:
    //       break;
    //   }
    // }
  };

  render() {
    const { title, body } = this.state;
    return (
      <Fragment>
        <div className="col-md-8 mx-auto my-5">
          <div className={styles.createArticle}>
            <div className={styles.articleTitle}>
              <ArticleTitle
                value={title}
                titleChangeHandler={this.titleChangeHandler}
                titlePlaceholderFocusInHandler={
                  this.titlePlaceholderFocusInHandler
                }
                titlePlaceholderFocusOutHandler={
                  this.titlePlaceholderFocusOutHandler
                }
              />
            </div>
            <div className={styles.textEditor}>
              <TextEditor
                ref={node => (this.rootNode = node)}
                value={body}
                editorChangeHandler={this.editorChangeHandler}
                bodyPlaceholderFocusInHandler={
                  this.bodyPlaceholderFocusInHandler
                }
                bodyPlaceholderFocusOutHandler={
                  this.bodyPlaceholderFocusOutHandler
                }
                imageUploadHandler={this.imageUploadHandler}
              />
            </div>
          </div>
          <div className={styles.buttonDiv}>
              <button
                className={styles.publishButton}
                onClick={this.handleSubmit}
                disabled
              >
                Publish
              </button>
        
          </div>
        </div>
      </Fragment>
    );
  }
}

CreateArticle.propTypes = {
  createArticle: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  article: state.article,
  error: state.error
});

export default connect(
  mapStateToProps,
  { createArticle }
)(CreateArticle);
