import type { ReactNode } from "react"

type ModalProps = {
  children: ReactNode
}

export const Modal = ({ children }: ModalProps) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
    <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-4 flex flex-col gap-4 text-center shadow-2xl">
      {children}
    </div>
  </div>
)
