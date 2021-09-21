import Card from '../../../../components/Card'

export default function IntentionToSell() {
  function handleAdd() {
    console.log('function add intention to sell')
  }
  return <Card title="Intenção de venda" onAdd={handleAdd} />
}
