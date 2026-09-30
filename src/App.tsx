import { useState } from 'react'
import Monster from './components/Monster.tsx'
import AttackButton from './components/AttackButton.tsx'
import Player from './components/Player.tsx'
import BattleStatus from './components/BattleStatus.tsx'

const ourMonster = {
  name: 'Snoopy Dragon',
  type: 'Beast',
  startingHealth: 100,
  attackDamage: 15,
}

const playerMaxHealth = 100
const potionHeal = 20

const attacksTypes = [
  { label: 'Normal Attack', damage: 10 },
  { label: 'Heavy Attack', damage: 20 },
  { label: 'Ultimate Attack', damage: 30 },
]

function App() {
  const [playerName, setPlayerName] = useState('')
  const [playerHealth, setPlayerHealth] = useState(playerMaxHealth)
  const [monsterHealth, setMonsterHealth] = useState(ourMonster.startingHealth)


  const displayName = playerName.trim() === '' ? 'Hero' : playerName
  const isMonsterDefeated = monsterHealth <= 0
  const isPlayerDefeated = playerHealth <= 0
  const isBattleOver = isMonsterDefeated || isPlayerDefeated

  function attackMonster(damage: number) {
    setMonsterHealth((health) => Math.max(0, health - damage))
  }

  function monsterAttacks() {
    setPlayerHealth((health) => Math.max(0, health - ourMonster.attackDamage))
  }

  function drinkPotion() {
    setPlayerHealth((health) => Math.min(playerMaxHealth, health + potionHeal))
  }

  function resetBattle() {
    setPlayerHealth(playerMaxHealth)
    setMonsterHealth(ourMonster.startingHealth)
  }

  return (
    <div className="container my-4">
      <h1 className="font-display">Monster Battle Arena</h1>

      <p className="mt-3 mb-1">Player Name:</p>
      <input
        type="text"
        className="form-control mb-3"
        value={playerName}
        placeholder="Enter your name"
        onChange={(event) => setPlayerName(event.target.value)}
      />

      <h4>{displayName} vs. {ourMonster.name}</h4>

      <Player name={displayName} health={playerHealth} maxHealth={playerMaxHealth} />
      <Monster
        name={ourMonster.name}
        type={ourMonster.type}
        startingHealth={ourMonster.startingHealth}
        currentHealth={monsterHealth}
        attackDamage={ourMonster.attackDamage}
      />

      <div className="mb-2">
        {attacksTypes.map((attack) => (
          <AttackButton
            key={attack.label}
            label={attack.label}
            damage={attack.damage}
            onAttack={attackMonster}
            disabled={isBattleOver}
          />
        ))}
      </div>

      <div className="mb-3">
        <button className="btn btn-danger me-2" onClick={monsterAttacks} disabled={isBattleOver}>
          Monster Attacks
        </button>
        <button className="btn btn-success me-2" onClick={drinkPotion} disabled={isBattleOver}>
          Drink Potion
        </button>
      </div>

      {isMonsterDefeated ? (
        <div className="alert text-center alert-success fw-semibold">The monster has been defeated!</div>
      ) : (
        <div className="alert text-center alert-warning fw-semibold">The monster is still fighting!</div>
      )}
      {isPlayerDefeated && <div className="alert alert-danger fw-semibold">You have been defeated!</div>}
      {isBattleOver && (
        <button className="btn btn-secondary mb-3" onClick={resetBattle}>
          New Battle
        </button>
      )}

      <BattleStatus
        playerName={displayName}
        playerHealth={playerHealth}
        monsterName={ourMonster.name}
        monsterHealth={monsterHealth}
      />
    </div>
  )
}

export default App
