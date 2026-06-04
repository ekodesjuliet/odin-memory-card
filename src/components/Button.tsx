import type { ReactNode } from 'react'

type ButtonProps = {
    onClick: () => void
    children: ReactNode
    variant?: 'modal' | 'icon'
}

export const Button = ({
    onClick,
    children,
    variant = 'modal',
}: ButtonProps) => {
    const base =
        'cursor-pointer transition-all duration-200 select-none font-medium'

    const variants = {
        modal: `
      text-xs
      text-black
      bg-lime-400/90
      px-5 py-3
      rounded-xl
      shadow-[0_0_10px_rgba(132,255,100,0.25)]
      hover:bg-lime-300
      hover:shadow-[0_0_18px_rgba(132,255,100,0.35)]
      hover:scale-[1.03]
      active:scale-[0.98]
    `,
        icon: `
      w-11 h-11
      flex items-center justify-center
      rounded-xl
      text-lime-400
      hover:bg-lime-400/10
      hover:scale-[1.05]
      active:scale-[0.95]
    `,
    }

    return (
        <button
            type="button"
            onClick={onClick}
            className={`${base} ${variants[variant]}`}
        >
            {children}
        </button>
    )
}
