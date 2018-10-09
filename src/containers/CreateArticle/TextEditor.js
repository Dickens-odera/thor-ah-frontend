import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
// import ArticleTitle from './ArticleTitle';
import './TextEditor.scss';

const apiKey="0naso5vy7fw5eu2eqblor00o1c326x0hupermg4cli0rqoqn";

class TextEditor extends React.Component {
  // state = {
  //   editor: null
  // }

  componentDidMount = () => {

  }

  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }

  render() {
    return (
      <div className="container-fluid textEditor my-5">
       <div className="row justify-content-md-center">
        {/* <ArticleTitle /> */}
        <div className="col-xs-12 col-md-7 col-sm-10 mainEditor">
          <Editor
            apiKey={apiKey}
            initialValue="<p>Share your thoughts</p>"
            init={{
              menubar: false,
              theme: "inlite",
              inline: true,
              height: 500,
              mobile: { 
                theme: "mobile",
                plugins: [ 'autosave', 'lists', 'autolink' ]
              },
              plugins: [
                'autolink',
                'codesample',
                'link',
                'linkchecker',
                'lists',
                'mediaembed',
                'textcolor',
                'image',
              ],
              selection_toolbar: 'bold italic underline strikethrough| h2 h3 | blockquote quicklink | alignleft aligncenter alignright alignfull',
            }}
            onChange={this.handleEditorChange}
          />
        </div>
       </div>
      </div>
    );
  }
}

export default TextEditor;
