import  React, { Component } from 'react';
import { markdown } from 'markdown';

class BinsViewer extends Component {
  // render viewer
  render() {
    // transform content to html
    const rawHtml = markdown.toHTML(this.props.bin.content);

    // return markdown with data
    return (
      <div className="col-xs-4">
        <h5>Ouput</h5>
        <div dangerouslySetInnerHTML={{ __html: rawHtml }}></div>
      </div>
    )
  }
}

export default BinsViewer;
