import styled from 'styled-components'

interface IContainerProps {
  active: boolean
}

export const Container = styled.div<IContainerProps>`
  padding: 31px 0;
  margin-top: 72px;
  margin-left: ${props => (props.active ? `280px` : `94px`)};
  transition: margin-left 0.3s;
`
