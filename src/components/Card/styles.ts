import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--white);
  height: 100%;
  border: 1px solid var(--gray-70);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  padding: 16px;
  border-bottom: 1px solid var(--gray-70);
`

export const Content = styled.div`
  padding: 16px;
  flex-grow: 1;
`
