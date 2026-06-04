import liveBg from '../assets/bg/live-bg.mp4'
import poster from '../assets/bg/poster.png'

export const Background = () => (
    <video
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        className="fixed inset-0 z-0 h-full w-full object-cover xl:object-[50%_15%]"
    >
        <source src={liveBg} type="video/mp4" />
    </video>
)
