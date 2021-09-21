import styled from 'styled-components'

interface IBadgeProps {
  color: 'info' | 'warning'
}

export const Container = styled.div`
  > div {
    height: 344px;
  }
`

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
  & + div {
    border-top: 1px solid var(--gray-60);
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
  justify-content: space-between;
  flex-grow: 1;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .price {
      color: var(--primary);
      font-weight: 600;
    }
    &:last-child {
      align-items: center;
    }
  }
  .text-uppercase {
    text-transform: uppercase;
  }
`

export const Badge = styled.span<IBadgeProps>`
  color: ${props => (props.color === 'info' ? '#1D2C4B' : '#FFFFFF')};
  background-color: ${props =>
    props.color === 'info' ? '#CCE8FE' : '#FFAB00'};
  border-radius: 5rem;
  padding: 4px 10px;
`

export const Time = styled.span`
  color: #666666;
  display: block;
  text-align: center;
  margin-top: 5px;
`
