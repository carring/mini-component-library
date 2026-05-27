import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    strokeWidth: 1,
    borderWidth: 1,
    iconGap: 8,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    strokeWidth: 2,
    borderWidth: 2,
    iconGap: 10,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size];

  return (
    <Wrapper
      style={{
        '--width': width ? width + 'px' : undefined,
        '--border-width': styles.borderWidth + 'px',
        '--font-size': styles.fontSize / 16 + 'rem',
        '--gap': styles.iconGap + 'px',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconInputWrapper id={icon} size={styles.iconSize} strokeWidth={styles.strokeWidth} />
      <Input placeholder={placeholder} id='search-input' type='text'/>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: var(--gap);
  width: var(--width);
  color: ${COLORS.gray700};
  border-bottom: var(--border-width) solid ${COLORS.black};
  padding-bottom: 4px;
  padding-top: 4px;

  &:hover {
    cursor: text;
    color: ${COLORS.black};
  }

  &:has(input:focus) {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  };
`;

const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;
  outline: none;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconInputWrapper = styled(Icon)`
  cursor: pointer;
`;

export default IconInput;
