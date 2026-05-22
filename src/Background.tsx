import liveBg from "./assets/bg/live-bg.mp4"

export const Background = () => (
  <video
    autoPlay
    muted
    loop
    playsInline
    className="
      w-full 
      h-full
      xl:object-[50%_15%] object-cover
      fixed 
      inset-0 
      z-0
    "
  >
    <source
      src={liveBg}
      type="video/mp4"
    />
  </video>
)
