import { VolumeMute, VolumeFull } from "@boxicons/react"

type HeaderActionsProps = {
  isMuted: boolean,
  onToggleMute: () => void
}

export const HeaderActions = ({ isMuted, onToggleMute }: HeaderActionsProps) => (
  <div className="relative z-10">
    {isMuted
      ? <VolumeMute
        className="text-amber-100 cursor-pointer"
        onClick={onToggleMute}
      />
      : <VolumeFull
        className="text-amber-100 cursor-pointer"
        onClick={onToggleMute}
      />
    }
  </div>
)
