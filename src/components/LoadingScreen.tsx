import { Quantum } from 'ldrs/react'
import 'ldrs/react/Quantum.css'
import poster from '../assets/images/poster.webp'

export const LoadingScreen = () => (
    <div className="fixed inset-0 flex items-center justify-center">
        <img
            src={poster}
            alt="Rick and Morty"
            className="absolute inset-0 z-0 h-full w-full object-cover xl:object-[50%_15%]"
        />

        <div className="relative z-10 scale-50 drop-shadow-[0_0_15px_#3ad8ff] md:scale-75 lg:scale-100">
            <Quantum size="150" speed="2" color="#C6F3FF" />
        </div>
    </div>
)
