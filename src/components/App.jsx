import { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];
 

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  
  const totalFeedback = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((good /countTotalFeedback()) * 100) || 0;
  }

  const onClickFeedBack = (feedback) => {
    switch (feedback) {
      case 'good':
        setGood(prevState => (prevState += 1));
        break;

      case 'neutral':
        setNeutral(prevState => (prevState += 1));
        break;

      case 'bad':
        setBad(prevState => (prevState += 1));
        break;

      default:
        console.log('error');
    }
  }

  return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onClickFeedBack={onClickFeedBack}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback ? 
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
            />
           : 
            <Notification message="There is no feedback" />
          }
        </Section>
      </>
  )
}