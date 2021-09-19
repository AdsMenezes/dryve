import styled, { css } from 'styled-components'
import { darken, transparentize } from 'polished'

interface IContainerProps {
  color?: 'primary' | 'white'
}

const handleColorType = (color: string | undefined) => {
  switch (color) {
    case 'primary':
      return css`
        color: #fff;
        background-color: #0065ff;
        border-color: #0065ff;
        &:hover,
        &:focus {
          background-color: ${darken(0.05, '#0065ff')};
          border-color: ${darken(0.05, '#0065ff')};
        }
        &:focus {
          box-shadow: 0 0 0 0.15rem ${transparentize(0.5, '#0065FF')};
        }
      `
    case 'white':
      return css`
        color: #0065ff;
        background-color: #ffffff;
        border-color: #cce8fe;
        &:hover,
        &:focus {
          color: #fff;
          background-color: ${darken(0.05, '#0065ff')};
          border-color: ${darken(0.05, '#0065ff')};
        }
        &:focus {
          box-shadow: 0 0 0 0.15rem ${transparentize(0.5, '#0065FF')};
        }
      `
    default:
      return css`
        background-color: transparent;
        &:hover,
        &:focus {
          background-color: #f7f7f7;
        }
        &:focus {
          box-shadow: 0 0 0 0.15rem #efefef;
        }
      `
  }
}

export const Container = styled.button<IContainerProps>`
  font-weight: 600;
  min-height: 38px;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 4px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 0.15rem rgba(0, 0, 0, 0);
  transition: 0.3s;
  ${props => handleColorType(props.color)};
`
