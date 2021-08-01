import React from 'react';
import PropTypes from 'prop-types';

import s from './Statistics.module.css';
import Section from 'components/Section';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <Section title="Statistics">
    <div>
      <p className={s.description}>Good: {good}</p>
      <p className={s.description}>Neutral: {neutral}</p>
      <p className={s.description}>Bad: {bad}</p>
      <p className={s.description}>Total: {total}</p>
      <p className={s.description}>Positive feedback: {positivePercentage}%</p>
    </div>
  </Section>
);
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
