import styled from 'styled-components'

export const Container = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  input {
    width: 0;
    height: 0;
    position: absolute;
    opacity: 0;
    &:checked ~ span:before {
      border-color: var(--primary);
      border-width: 5px;
    }
  }
`

export const Label = styled.span`
  padding-right: 0.75rem;
  display: flex;
  align-items: center;
  &:before {
    content: '';
    background-color: var(--white);
    width: 18px;
    height: 18px;
    border: 2px solid var(--gray-80);
    border-radius: 50%;
    margin-right: 0.75rem;
    display: inline-block;
    transition: border-width 0.3s, border-color 0.3s;
    box-sizing: border-box;
  }
`
