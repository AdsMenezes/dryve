import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--white);
  height: 100%;
  min-height: 120px;
  border: 1px solid var(--gray-70);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    font-size: 14px;
    font-weight: 500;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Value = styled.span`
  font-size: 32px;
  letter-spacing: -0.025em;
`

export const Icon = styled.span`
  color: var(--primary);
  font-size: 20px;
  background-color: var(--gray-50);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`
