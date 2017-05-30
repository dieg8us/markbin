import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
  componentDidMount() {
      // render the Blaze accounts form then find the div
      // we just rendered in the 'render' method and place
      // the Blaze account form in that div
      this.view = Blaze.render(Template.loginButtons,
                    ReactDOM.findDOMNode(this.refs.container));
  }

  componentWillUnmount() {
      // go find the forms we created and destroy them
      // we need to clean up those form ourselves
      Blaze.remove(this.view);
  }

  render() {
    return (
      <div ref="container"></div>
    );
  }
}

export default Accounts;
