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

    const percent = ((totalNotesHit / totalNotes) * 100);

    if (isNaN(percent)) {
      return "0.00";
    }

    return percent.toFixed(2);
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
