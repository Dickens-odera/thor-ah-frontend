import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import PropTypes from 'prop-types';

const apiKey = "0naso5vy7fw5eu2eqblor00o1c326x0hupermg4cli0rqoqn";

const TextEditor = ({
  imageUploadHandler,
  editorChangeHandler,
  value,
  placeholderFocusInHandler,
  placeholderFocusOutHandler
}) => (
    <Editor
      apiKey={apiKey}
      value={value}
      onChange={editorChangeHandler}
      onFocusIn={placeholderFocusInHandler}
      onFocusOut={placeholderFocusOutHandler}
      init={{
        menubar: false,
        theme: "inlite",
        inline: true,
        mobile: {
          theme: "mobile",
          plugins: ["autosave", "lists", "autolink"]
        },
        plugins: [
          "autolink",
          "codesample",
          "link",
          "linkchecker",
          "lists",
          "mediaembed",
          "textcolor",
          "image",
          "emoticons"
        ],
        selection_toolbar:
          "bold italic underline strikethrough| h2 h3 | blockquote quicklink | alignleft aligncenter alignright alignfull",
        images_upload_handler: imageUploadHandler,
        images_reuse_filename: true,
        toolbar: "emoticons"
      }}
    />
);

TextEditor.propTypes = {
  imageUploadHandler: PropTypes.func.isRequired,
  editorChangeHandler: PropTypes.func.isRequired,
  placeholderFocusInHandler: PropTypes.func.isRequired,
  placeholderFocusOutHandler: PropTypes.func.isRequired
}

export default TextEditor;
