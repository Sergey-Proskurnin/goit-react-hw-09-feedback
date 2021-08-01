import React, { useState } from 'react';

import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';
import Container from 'components/Container';

const App = () => {
  //------------------method--swithc-----------------------------------------------------------------
  //   const [good, setStateGood] = useState(0)
  //   const [neutral, setStateNeutral] = useState(0)
  //   const [bad, setStateBad] = useState(0)

  //   const handleIncrement = ({ target: { name } }) => {
  //     switch (name) {
  //       case 'good':
  //         setStateGood(prev => prev + 1 );
  //         break;
  //       case 'neutral':
  //         setStateNeutral(prev => prev + 1 );
  //         break;
  //       case 'bad':
  //         setStateBad(prev => prev + 1 );
  //         break;
  //       default:
  //         return;
  //     }
  //   }
  // const objFeedback = {good, neutral, bad}
  //------------------------------method--object--state------------------------------------
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
  // const keys = Object.keys(objFeedback);

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
