import PropTypes from 'prop-types';
import { Box } from '../Box/Box';
import { StatisticsItem, TotalFeedback } from './Statistics.styled'
import { FiSmile, FiFrown, FiMeh } from "react-icons/fi";

export const Statistics = ({ good, neutral, bad, total, positiveFeedbackPercentage }) => {
  return (
      <Box p={3}>
        <Box p ={4}>
            <StatisticsItem><FiSmile />Good: {good}</StatisticsItem>
            <StatisticsItem><FiMeh />Neutral: {neutral}</StatisticsItem>
            <StatisticsItem><FiFrown />Bad: {bad}</StatisticsItem>
        </Box> 
        <Box>
            <TotalFeedback>Total: {total}</TotalFeedback>
            <TotalFeedback>Positive feedback: {positiveFeedbackPercentage}%</TotalFeedback>
        </Box>
      </Box>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedbackPercentage: PropTypes.number,
};