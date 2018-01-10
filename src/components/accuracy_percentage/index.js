import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccuracyPercentage extends Component {
  static defaultProps = {
    percent: 90,
  };

  static propTypes = {
    percent: PropTypes.number,
  };

  render() {
    return (
      <div className="accuracy-percentage">
        { this.props.percent }%
      </div>
    );
  }
}

export default AccuracyPercentage;
