import styled from 'styled-components'

export const Item = styled.div`
  font-size: 12px;
  line-height: 18px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    flex-direction: column;
    &:last-child {
      position: relative;
      min-width: 53px;
      > div:last-child {
        right: 0;
        z-index: 1;
      }
    }
  }
`
export const ItemImageBox = styled.div`
  background-color: #f9f9f9;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: 0;
  transform: translateY(-50%);
`
export const ItemImagePlatform = styled.img`
  max-width: 100%;
`
export const ItemImageCar = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`
