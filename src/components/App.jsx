import React, { Component } from 'react';
import { StatisticList } from './StatisticList/StatisticList';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onSetFeedback = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  render() {
    const keys = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={keys} onLeaveFeedback={this.onSetFeedback}></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <StatisticList good={good} neutral={neutral} bad={bad} />
        </Section>
      </div>
    );
  }
}

