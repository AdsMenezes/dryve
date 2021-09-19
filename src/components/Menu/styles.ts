import styled from 'styled-components'

interface IContainerProps {
  active: boolean
}

export const Container = styled.div<IContainerProps>`
  background-color: var(--white);
  box-shadow: inset -1px 0px 0px var(--gray-60);
  width: ${props => (props.active ? `280px` : `94px`)};
  padding: 24px 0;
  position: fixed;
  top: 72px;
  left: 0;
  bottom: 0;
  transition: width 0.3s;
  .container-fluid {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ul li:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`

export const Retract = styled.div<IContainerProps>`
  display: flex;
  justify-content: flex-end;
  button {
    color: var(--secondary);
    font-size: 22px;
    width: 100%;
    max-width: 46px;
    padding: 7px;
    span {
      transform: ${props => (props.active ? `scaleX(1)` : `scaleX(-1)`)};
      display: block;
    }
  }
`
