import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Heading = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: 24px;
  }
  button {
    padding: 7px;
    .icon {
      color: var(--primary);
      font-size: 22px;
    }
  }
`

export const Content = styled.div`
  h4 {
    color: var(--primary);
    font-size: 16px;
    font-weight: 600;
  }
`
