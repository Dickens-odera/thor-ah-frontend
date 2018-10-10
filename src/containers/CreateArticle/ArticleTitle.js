import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import PropTypes from "prop-types";

const apiKey = "0naso5vy7fw5eu2eqblor00o1c326x0hupermg4cli0rqoqn";

const ArticleTitle = ({
  titleChangeHandler,
  value,
  placeholderFocusInHandler,
  placeholderFocusOutHandler,
  pasteHandler,
}) => (
  <Editor
    apiKey={apiKey}
    value={value}
    onChange={titleChangeHandler}
    onFocusIn={placeholderFocusInHandler}
    onFocusOut={placeholderFocusOutHandler}
    onPaste={pasteHandler}
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
  placeholderFocusInHandler: PropTypes.func.isRequired,
  placeholderFocusOutHandler: PropTypes.func.isRequired,
  pasteHandler: PropTypes.func.isRequired
}

export default ArticleTitle;
