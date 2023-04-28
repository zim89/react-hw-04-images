import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleClick = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        return setGood(state => state + 1);

      case 'neutral':
        return setNeutral(state => state + 1);

      case 'bad':
        return setBad(state => state + 1);

      default:
        return console.warn(`Нет такого свойства ${name}`);
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100) || 0;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} handleClick={handleClick} />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}

export default App;
