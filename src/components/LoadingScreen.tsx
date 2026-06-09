import { Quantum } from 'ldrs/react'
import 'ldrs/react/Quantum.css'
import bg from '../assets/bg/poster.png'

export const LoadingScreen = () => (
    <div className="fixed inset-0 flex items-center justify-center">
        <img
            src={bg}
            alt="Rick and Morty"
            className="absolute inset-0 z-0 h-full w-full object-cover xl:object-[50%_15%]"
        />

        <div className="relative z-10">
            <Quantum size="150" speed="2" color="#9ae600" />
        </div>
    </div>
)
