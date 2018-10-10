/* eslint-disable */
import React, { Component, Fragment } from "react";
import axios from "axios";
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
      loading: false
    };
  }

  titleChangeHandler = title =>
    this.setState({
      title
    });

  editorChangeHandler = body =>
    this.setState({
      body: body
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

  // titlePasteHandler = (e) => {
  //   e.preventDefault();
  //   const content = navigator.clipboard.readText();
  //   if (typeof clipContent !== 'string') return;
  //   this.setState({ title: content });
  //   console.log
  // }

  imageUploadHandler = (blobInfo, success, failure) => {
    try {
      const { imgUrl } = this.state;
      const formData = new FormData();
      formData.append(file, blobInfo.blob(), blobInfo.filename());
      formData.append(upload_preset, "asgjqcgx");
      formData.append(api_key, "329369412183662");
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
          console.log(data);
          success(result.data.secure_url);
        });
    } catch (error) {
      failure("file upload failed", console.log(error));
    }
  };

  handleSubmit = () => {
    const { title, body } = this.state;

    console.log(this.rootNode.props.value);

    axios
      .post("https://thor-ah-staging.herokuapp.com/api/articles", {
        title,
        body
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log(error));
  };

  render() {
    const { title, imageUrl, body } = this.state;
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
                titlePasteHandler={this.titlePasteHandler}
              />
            </div>
            <div className="textEditor">
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
          <div className="mt-3 buttonDiv">
            <button
              className={styles.publishButton}
              onClick={this.handleSubmit}
            >
              Publish
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CreateArticle;
