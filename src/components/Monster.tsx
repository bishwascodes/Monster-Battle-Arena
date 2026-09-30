type MonsterProps = {
  name: string
  type: string
  startingHealth: number
  currentHealth: number
  attackDamage: number
}

function Monster({ name, type, startingHealth, currentHealth, attackDamage }: MonsterProps) {
  return (
    <div className="card border-danger mb-3">
      <div className="card-header text-bg-danger fw-bold">MONSTER</div>
      <div className="card-body">
        <h5>{name}</h5>
        <p className="mb-0">Type: {type}</p>
        <p className="mb-0">Starting Health: {startingHealth}</p>
        <p className="mb-0">Health: {currentHealth}</p>
        <p className="mb-0">Attack Damage: {attackDamage}</p>
      </div>
    </div>
  )
}

export default Monster
