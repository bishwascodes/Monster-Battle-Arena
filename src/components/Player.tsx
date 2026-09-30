type PlayerProps = {
  name: string
  health: number
  maxHealth: number
}

function Player({ name, health, maxHealth }: PlayerProps) {
  return (
    <div className="card border-success mb-3">
      <div className="card-header text-bg-success fw-bold">PLAYER</div>
      <div className="card-body">
        <h5>{name}</h5>
        <p className="mb-0">Health: {health} / {maxHealth}</p>
      </div>
    </div>
  )
}

export default Player
