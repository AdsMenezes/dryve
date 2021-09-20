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
