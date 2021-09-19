import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { transparentize } from 'polished'

export const Container = styled(NavLink)`
  font-weight: 500;
  letter-spacing: -0.025em;
  background: transparent;
  background-clip: padding-box;
  box-shadow: 0 0 0 0.15rem rgba(0, 0, 0, 0);
  min-height: 40px;
  border-radius: 6px;
  padding: 0 11px;
  display: flex;
  align-items: center;
  transition: color 0.3s, background-color 0.3s, box-shadow 0.3s;
  overflow: hidden;
  &:hover,
  &:focus {
    background-color: var(--gray-50);
  }
  &:focus {
    box-shadow: 0 0 0 0.15rem var(--gray-60);
  }
  &.active {
    color: var(--white);
    font-weight: 600;
    background-color: var(--primary);
    &:focus {
      box-shadow: 0 0 0 0.15rem ${transparentize(0.5, '#0065FF')};
    }
  }
`

export const Icon = styled.span`
  font-size: 22px;
  min-width: 24px;
  display: flex;
  justify-content: center;
`

export const Label = styled.span`
  padding-left: 11px;
  display: block;
`
