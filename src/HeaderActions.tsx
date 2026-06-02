import { VolumeMute, VolumeFull } from "@boxicons/react"

type HeaderActionsProps = {
  isMuted: boolean,
  onToggleMute: () => void
  isGameScreen?: boolean
}

export const HeaderActions = ({ isMuted, onToggleMute, isGameScreen }: HeaderActionsProps) => {

  return (
    <div className={`relative z-10 mt-6 px-6 ${!isGameScreen ? "ml-auto w-fit" : ""}`}>
      {
        isMuted
          ? <VolumeMute
            size="xs"
            className="text-lime-400 cursor-pointer"
            onClick={onToggleMute}
          />
          : <VolumeFull
            size="xs"
            className="text-lime-400 cursor-pointer"
            onClick={onToggleMute}
          />
      }
    </div >
  )
}
