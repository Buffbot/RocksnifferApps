import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Notification extends Component {
  render() {
    return (
      <div className="album-title">
        { this.props.title }
      </div>
    );
  }
}

export default Notification;
