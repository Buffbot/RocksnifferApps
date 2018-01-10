import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BandName extends Component {
  static defaultProps = {
    name: 'Band Name'
  };

  static propTypes = {
    name: PropTypes.string,
  };

  render() {
    return (
      <div className="band-name">
        { this.props.name }
      </div>
    );
  }
}

export default BandName;
