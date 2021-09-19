import styled from 'styled-components'

export const Container = styled.div`
  button {
    padding: 7px;
    &:hover .alert {
      border-color: var(--gray-50);
    }
  }
`

export const Icon = styled.span`
  color: var(--secondary);
  font-size: 22px;
  position: relative;
`

export const Alert = styled.span`
  background-color: var(--danger);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 2px solid var(--white);
  position: absolute;
  top: -2px;
  right: 0;
  box-sizing: content-box;
  transition: border-color 0.3s;
`
