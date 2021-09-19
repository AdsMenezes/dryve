import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Avatar = styled.button`
  background-color: var(--gray-50);
  border: 3px solid var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin: 2px;
    transition: opacity 0.3s;
  }
  &:hover img {
    opacity: 0.7;
  }
`
