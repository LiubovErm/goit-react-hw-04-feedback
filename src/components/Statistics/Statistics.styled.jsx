import styled from 'styled-components';

export const StatisticsItem = styled.p`
  font-size: ${props => props.theme.fontSizes.l};
   :nth-of-type(1) {
  color: ${props => props.theme.colors.green};
   }
   :nth-of-type(2) {
  color: ${props => props.theme.colors.orange};
   }
   :nth-of-type(3) {
  color: ${props => props.theme.colors.red};
   }
`;

export const TotalFeedback = styled.p`
  font-size: ${props => props.theme.fontSizes.l};
`;