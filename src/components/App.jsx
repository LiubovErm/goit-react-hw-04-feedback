import { Component } from 'react';

import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickFeedBack = feedback => {
    this.setState(prevState => ({ [feedback]: (prevState[feedback] += 1) }));
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, num) => acc + num, 0);
  }

  countPositiveFeedbackPercentage = () => {
    return Math.ceil((this.state.good / this.countTotalFeedback()) * 100) || 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onClickFeedBack={this.onClickFeedBack}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback ? 
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
           : 
            <Notification message="There is no feedback" />
          }
        </Section>
      </>
    );
  }
}
