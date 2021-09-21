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

export const Scroll = styled.div`
  padding: 0 16px;
`

export const TrackVertical = styled.div`
  border-radius: 5rem;
  top: 5px;
  right: 5px;
  bottom: 5px;
`

export const Content = styled.div`
  padding: 16px;
  flex-grow: 1;
`

export const NoContent = styled.div`
  color: #666;
  padding: 20px;
  flex-grow: 1;
  text-align: center;
  font-size: 12px;
`

export const AddContent = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  button {
    font-size: 12px;
    min-height: 28px;
    padding: 0 6px;
    span {
      font-size: 16px;
    }
  }
`

export const Footer = styled.div`
  padding: 16px;
  border-top: 1px solid var(--gray-70);
  display: flex;
  justify-content: flex-end;
`
