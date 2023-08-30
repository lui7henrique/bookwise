import { ReactNode } from 'react'

type LayoutContainerProps = { children: ReactNode }

export const LayoutContainer = ({ children }: LayoutContainerProps) => {
  return (
    <div className="max-h-[calc(100vh - 16px))] flex w-full flex-col gap-16 overflow-y-scroll px-8 py-8 xl:px-24 xl:py-14">
      <div className="mx-auto flex w-full max-w-container flex-col gap-16">
        {children}
      </div>
    </div>
  )
}
