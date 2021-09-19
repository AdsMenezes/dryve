import styled from 'styled-components'
import { transparentize } from 'polished'

export const Container = styled.button`
  background-color: var(--white);
  font-weight: 600;
  width: 28px;
  height: 28px;
  border: 1px solid var(--gray-60);
  border-radius: 6px;
  transition: background-color 0.3s, border-color 0.3s;
  outline: none;
  &:hover,
  &:focus {
    background-color: var(--gray-60);
  }
  &:focus {
    box-shadow: 0 0 0 0.15rem var(--gray-60);
  }
  &.active {
    color: var(--white);
    background-color: var(--primary);
    border-color: var(--primary);
    &:focus {
      box-shadow: 0 0 0 0.15rem ${transparentize(0.5, '#0065FF')};
    }
  }
  & + button {
    margin-left: 4px;
  }
`
