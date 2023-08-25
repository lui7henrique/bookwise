import { ReactNode } from 'react'

type LayoutRootProps = { children: ReactNode }

export const LayoutRoot = ({ children }: LayoutRootProps) => (
  <div className="flex h-screen w-screen gap-5">{children}</div>
)
