import liveBg from "../assets/bg/live-bg.mp4"
import poster from "../assets/bg/poster.png"

export const Background = () => (
  <video
    autoPlay
    muted
    loop
    playsInline
    poster={poster}
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
