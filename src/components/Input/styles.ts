import styled from 'styled-components'

interface IContainerProps {
  hasIcon?: boolean
}

export const Container = styled.label<IContainerProps>`
  display: block;
  position: relative;
  margin: 3px 0;
  input {
    background-color: var(--white);
    background-clip: padding-box;
    width: 100%;
    min-height: 38px;
    border: 1px solid var(--gray-80);
    border-radius: 6px;
    padding: ${({ hasIcon }) => (hasIcon ? '0 35px 0 12px' : '0 12px')};
    &::placeholder {
      color: var(--gray-100);
    }
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
