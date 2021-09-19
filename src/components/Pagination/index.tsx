import Item from './Item'

import { Container, Points } from './styles'

interface IPaginationProps {
  totalCountOfRegisters: number
  registersPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 2

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter(page => page > 0)
}

export default function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: IPaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage)

  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPage =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : []

  return (
    <Container>
      {currentPage > 1 + siblingsCount && (
        <>
          <Item number={1} onPageChange={onPageChange} />
          {currentPage > 2 + siblingsCount && <Points>...</Points>}
        </>
      )}

      {previousPage.length > 0 &&
        previousPage.map(page => {
          return <Item key={page} number={page} onPageChange={onPageChange} />
        })}

      <Item number={currentPage} onPageChange={onPageChange} active />

      {nextPage.length > 0 &&
        nextPage.map(page => {
          return <Item key={page} number={page} onPageChange={onPageChange} />
        })}

      {currentPage + siblingsCount < lastPage && (
        <>
          {currentPage + 1 + siblingsCount < lastPage && <Points>...</Points>}
          <Item number={lastPage} onPageChange={onPageChange} />
        </>
      )}
    </Container>
  )
}
