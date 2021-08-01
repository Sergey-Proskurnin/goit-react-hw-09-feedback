import React from 'react';
import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.css';

import Section from 'components/Section';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Section title="Please leave feedback">
    <div className={s.section}>
      {options.map((option, idx) => (
        <button
          className={s.btn}
          key={idx}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  </Section>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
