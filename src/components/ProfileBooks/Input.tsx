import { MagnifyingGlass } from '@phosphor-icons/react'
import { ComponentProps } from 'react'

type ProfileBooksInputProps = ComponentProps<'input'>

export const ProfileBooksInput = (props: ProfileBooksInputProps) => {
  return (
    <div className="flex w-full items-center rounded-[4px] border border-gray-700 bg-transparent">
      <input
        type="text"
        className="h-full w-[calc(100%-48px)] bg-transparent py-[14px] pl-5 pr-12 text-sm text-gray-400 outline-none"
        placeholder="Buscar livro avaliado"
        {...props}
      />

      <div className="flex aspect-square h-full items-center  justify-center">
        <MagnifyingGlass className="fill-gray-500" width={20} height={20} />
      </div>
    </div>
  )
}
