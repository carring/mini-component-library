import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon/Icon';
import { getDisplayedValue } from './Select.helpers';


const Select = ({ label, value, onChange, children, ...delegated }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect
        value={value}
        onChange={onChange}
        aria-label={label}
      >
        {children}
      </NativeSelect>
      <CustomTrigger tabIndex={-1} aria-hidden="true">
        <SelectedValue>{displayedValue}</SelectedValue>
        <Icon id="chevron-down" size={24} strokeWidth={2}/>
      </CustomTrigger>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const CustomTrigger = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 12px 12px 16px;
  font-size: 1rem;
  color: ${COLORS.gray700};
  pointer-events: none;
  box-sizing: border-box;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;

  &:hover + ${CustomTrigger} {
    color: ${COLORS.black};
  }

  &:focus + ${CustomTrigger} {
    outline: auto;
  }
`;

const SelectedValue = styled.span`
  white-space: nowrap;
`;

export default Select;
