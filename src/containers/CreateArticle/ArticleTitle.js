import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import PropTypes from "prop-types";

const apiKey = "0naso5vy7fw5eu2eqblor00o1c326x0hupermg4cli0rqoqn";

const ArticleTitle = ({
  value,
  titleChangeHandler,
  titlePlaceholderFocusInHandler,
  titlePlaceholderFocusOutHandler,
  titlePasteHandler,
}) => (
  <Editor
    apiKey={apiKey}
    value={value}
    onEditorChange={titleChangeHandler}
    onFocusIn={titlePlaceholderFocusInHandler}
    onFocusOut={titlePlaceholderFocusOutHandler}
    onPaste={titlePasteHandler}
    name="article-title"
    tagName="h1"
    init={{
      menubar: false,
      inline: true,
      theme: "inlite",
    }}
  />
);

ArticleTitle.propTypes = {
  value: PropTypes.string.isRequired,
  titleChangeHandler: PropTypes.func.isRequired,
  titlePlaceholderFocusInHandler: PropTypes.func.isRequired,
  titlePlaceholderFocusOutHandler: PropTypes.func.isRequired,
  titlePasteHandler: PropTypes.func.isRequired
}

export default ArticleTitle;
