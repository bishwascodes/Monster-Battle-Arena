type BattleStatusProps = {
  playerName: string
  playerHealth: number
  monsterName: string
  monsterHealth: number
}

function BattleStatus({ playerName, playerHealth, monsterName, monsterHealth }: BattleStatusProps) {
  return (
    <div className="card">
      <div className="card-body">
        <h5>BATTLE STATUS</h5>
        <p className="mb-0">{playerName}: {playerHealth} HP</p>
        <p className="mb-0">{monsterName}: {monsterHealth} HP</p>
      </div>
    </div>
  )
}

export default BattleStatus
