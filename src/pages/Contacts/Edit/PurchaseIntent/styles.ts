import styled from 'styled-components'

export const Item = styled.div`
  font-size: 12px;
  letter-spacing: -0.025em;
  line-height: 15px;
  padding: 8px 0;
  display: flex;
  align-items: center;
  h3 {
    font-size: 12px;
    text-transform: uppercase;
  }
  ul {
    display: flex;
    li:not(:last-child):after {
      content: '';
      background-color: var(--gray-100);
      width: 3px;
      height: 3px;
      margin: 2px 6px;
      border-radius: 50%;
      display: inline-block;
    }
  }
`

export const ItemImage = styled.img`
  width: 100%;
  max-width: 130px;
  margin-right: 16px;
  border-radius: 4px;
`

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .price {
    color: var(--primary);
    font-weight: 600;
  }
  .text-uppercase {
    text-transform: uppercase;
  }
`
export const Footer = styled.div`
  button {
    color: var(--primary);
  }
`
