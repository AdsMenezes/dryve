import { Container } from './styles'

interface IItemProps {
  number: number
  active?: boolean
  onPageChange: (page: number) => void
}

export default function Item({
  number,
  active = false,
  onPageChange,
}: IItemProps) {
  return (
    <Container
      onClick={() => onPageChange(number)}
      className={active ? 'active' : ''}
    >
      {number}
    </Container>
  )
}
