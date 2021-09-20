import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Heading = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: 24px;
  }
  .icon {
    font-size: 20px;
  }
`

export const Content = styled.div`
  background-color: var(--white);
  height: 100%;
  border: 1px solid var(--gray-70);
  border-radius: 8px;
  table {
    caption-side: bottom;
    border-collapse: collapse;
    width: 100%;
    thead td {
      color: var(--gray-100);
      border-bottom: 2px solid var(--gray-70);
      text-align: left;
      padding: 16px;
    }
    tbody td {
      background-color: var(--white);
      text-align: left;
      height: 64px;
      padding: 16px;
      transition: background-color 0.3s;
      cursor: pointer;
    }
    tbody tr:hover td {
      background-color: var(--gray-40);
    }
    tbody tr:not(:last-child) td {
      border-bottom: 1px solid var(--gray-50);
    }
  }
`

export const NameInitials = styled.div`
  color: var(--primary);
  font-size: 18px;
  font-weight: bold;
  background-color: #eaf9ff;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TableFooter = styled.div`
  border-top: 2px solid var(--gray-70);
  padding: 16px;
`
