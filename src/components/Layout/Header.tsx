import { Icon } from '@phosphor-icons/react'
import { ReactNode } from 'react'

type HeaderProps = { children: ReactNode }
type TitleProps = { children: ReactNode }
type IconProps = { icon: Icon }

export const LayoutHeaderIcon = ({ icon: Icon }: IconProps) => (
  <Icon className="fill-green-100" width={32} height={32} />
)

export const LayoutHeaderTitle = ({ children }: TitleProps) => (
  <h1 className="text-2xl font-bold text-gray-100">{children}</h1>
)

export const LayoutHeader = ({ children }: HeaderProps) => (
  <div className="flex items-center gap-3">{children}</div>
)
