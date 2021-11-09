import React, { Component } from 'react';

class ReadContent extends Component {
    render() {
      return(
        <article>
              <h2>{this.props.title}</h2>
              {this.props.desc} {/* desc is description */}
          </article>
      );
    }
  }

export default ReadContent;