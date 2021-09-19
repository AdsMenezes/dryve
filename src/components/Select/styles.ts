import styled from 'styled-components'

export const Container = styled.label`
  display: block;
  position: relative;
  margin: 3px 0;
  select {
    background-color: var(--white);
    background-clip: padding-box;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    min-height: 38px;
    border: 1px solid var(--gray-80);
    border-radius: 6px;
    padding: 0 35px 0 8px;
    appearance: none;
  }
`

export const Label = styled.span`
  font-size: 10px;
  color: var(--gray-100);
  background-color: var(--white);
  padding: 0 4px;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(-50%);
  pointer-events: none;
`

export const Icon = styled.span`
  color: var(--gray-100);
  font-size: 20px;
  position: absolute;
  top: 50%;
  right: 12px;
  z-index: 1;
  transform: translateY(-50%);
  pointer-events: none;
`
