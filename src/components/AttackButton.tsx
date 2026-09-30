type AttackButtonProps = {
  label: string
  damage: number
  onAttack: (damage: number) => void
  disabled?: boolean
}

function AttackButton({ label, damage, onAttack, disabled = false }: AttackButtonProps) {
  return (
    <button className="btn btn-primary me-2" onClick={() => onAttack(damage)} disabled={disabled}>
      {label}
    </button>
  )
}

export default AttackButton
