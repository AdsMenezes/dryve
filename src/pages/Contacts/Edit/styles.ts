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

export const Panel = styled.div`
  background-color: var(--white);
  height: 100%;
  border: 1px solid var(--gray-70);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  > h3 {
    font-size: 14px;
    font-weight: 500;
    padding: 16px;
    border-bottom: 1px solid var(--gray-70);
  }
`

export const PanelContent = styled.div`
  padding: 16px;
  flex-grow: 1;
`

export const PanelFooter = styled.div`
  border-top: 1px solid var(--gray-70);
  padding: 16px;
  display: flex;
  justify-content: flex-end;
`
