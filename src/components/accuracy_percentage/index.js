import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccuracyPercentage extends Component {
  static defaultProps = {
    totalNotes: 100,
    totalNotesHit: 0,
  };

  static propTypes = {
    percent: PropTypes.number,
  };

  get percentage() {
    const { totalNotes, totalNotesHit } = this.props;

    return (totalNotesHit / totalNotes) * 100;
  }

  render() {
    return (
      <div className="accuracy-percentage">
        { this.percentage }%
      </div>
    );
  }
}

export default AccuracyPercentage;
