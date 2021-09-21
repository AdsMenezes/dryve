import Select from '../Select'
import { Container } from './styles'

interface IPerPageProps {
  totalCountOfRegisters: number
  registersPerPage: number
  onPerPageChange: (page: number) => void
}

interface IOption {
  label: string | number
  value: number
}

function generatePagesArray(
  perPage: number,
  accumulator: number,
  totalPage: number
) {
  const array: IOption[] = [{ label: perPage, value: perPage }]

  let count = accumulator
  while (count < totalPage) {
    count += accumulator
    if (count >= totalPage) {
      array.push({ label: totalPage, value: totalPage })
    } else {
      array.push({ label: count, value: count })
    }
  }

  return array
}

export default function PerPage({
  totalCountOfRegisters,
  registersPerPage,
  onPerPageChange,
}: IPerPageProps) {
  const options = generatePagesArray(
    registersPerPage,
    15,
    totalCountOfRegisters
  )
  function handleChange(page: number) {
    onPerPageChange(page)
  }
  return (
    <Container>
      <span className="me-3">
        Exibindo {registersPerPage} de {totalCountOfRegisters} registros
      </span>
      <Select
        options={options}
        onChange={e => handleChange(Number(e.target.value))}
      />
    </Container>
  )
}
