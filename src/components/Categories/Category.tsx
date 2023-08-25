import { ComponentProps, ReactNode } from 'react'

export type CategoryProps = {
  children: ReactNode
} & ComponentProps<'div'>

export const Category = ({ children, ...divProps }: CategoryProps) => {
  return (
    <div
      className="aria- cursor-pointer rounded-full border border-purple-100 px-4 py-1 text-purple-100 transition-all hover:bg-purple-200 hover:text-gray-100 aria-checked:border-transparent aria-checked:bg-purple-200 aria-checked:text-gray-100"
      {...divProps}
    >
      {children}
    </div>
  )
}
