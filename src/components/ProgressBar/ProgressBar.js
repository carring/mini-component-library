/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { COLORS } from '../../constants';

const normalizeValue = (value) => {
  const numericValue = Number(value);
  
  if (!Number.isFinite(numericValue)) return 0;

  return Math.min(100, Math.max(0, numericValue));
};

const getRightRadius = (value) => {
  const start = 98;

  if (value <= start) return '0px';

  const progress = (value - start) / (100 - start);
  const radius = Math.min(4, Math.max(0, progress * 4));

  return `${radius.toFixed(2)}px`;
};

const Progress = styled.progress`
  appearance: none;
  width: 100%;
  border: 0;
  overflow: hidden;
  border-radius: var(--track-radius);

  &::-webkit-progress-bar {
    box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
    background-color: ${COLORS.transparentGray15};
    border-radius: inherit;
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: var(--fill-left-radius) ${props => getRightRadius(props.value)} ${props => getRightRadius(props.value)} var(--fill-left-radius);
  }
`;

const ProgressLarge = styled(Progress)`
  --track-radius: 8px;
  --fill-left-radius: 4px;
  height: 24px;

  &::-webkit-progress-bar {
    padding: 4px;
  }
`;

const ProgressMedium = styled(Progress)`
  --track-radius: 4px;
  --fill-left-radius: 4px;
  height: 12px;
`;

const ProgressSmall = styled(Progress)`
  --track-radius: 4px;
  --fill-left-radius: 4px;
  height: 8px;
`;

const ProgressBar = ({ value, size }) => {
  const normalizedValue = normalizeValue(value);

  switch (size) {
    case 'large':
      return  <ProgressLarge max="100" value={normalizedValue} aria-label="Progress bar">{normalizedValue}%</ProgressLarge>
    case 'medium':
      return  <ProgressMedium max="100" value={normalizedValue} aria-label="Progress bar">{normalizedValue}%</ProgressMedium>
    case 'small':
      return  <ProgressSmall max="100" value={normalizedValue} aria-label="Progress bar">{normalizedValue}%</ProgressSmall>
    default:
      return  null;
  }
};

export default ProgressBar;
