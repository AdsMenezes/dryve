import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  min-height: 300px;
`

export const Item = styled.div`
  font-weight: 500;
  display: flex;
  padding: 8px 0;
  & + div {
    border-top: 1px solid var(--gray-60);
  }
`

export const ItemImage = styled.img`
  max-width: 100%;
`

export const ItemImageBox = styled.div`
  background-color: var(--gray-40);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 16px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  span:last-child {
    color: var(--primary);
  }
`
