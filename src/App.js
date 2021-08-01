import React, { useState } from 'react';

import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';
import Container from 'components/Container';

const App = () => {
  const initionalState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [state, setState] = useState(initionalState);

  const handleIncrement = e => {
    const { name } = e.target;
    setState(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };
  const { good, neutral, bad } = state;

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const totalPositiv = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const total = countTotalFeedback();
  const positivTotal = totalPositiv() ? totalPositiv() : 0;
  const keys = Object.keys(state);

  return (
    <Container>
      <FeedbackOptions options={keys} onLeaveFeedback={handleIncrement} />
      {total ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivTotal}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </Container>
  );
};

export default App;
