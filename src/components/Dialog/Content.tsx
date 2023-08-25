/* eslint-disable prettier/prettier */
import {
  DialogContent as DialogPrimitiveContent,
  DialogContentProps as DialogPrimitiveContentProps,
} from '@radix-ui/react-dialog'

type DialogContentProps = {
  size?: 'md'
} & DialogPrimitiveContentProps

export const DialogContent = (props: DialogContentProps) => {
  return (
    <DialogPrimitiveContent
      className="rounded-default fixed left-[50%] top-[50%] max-h-[85vh] w-[372px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-gray-700 shadow-md  focus:outline-none data-[state=open]:animate-contentShow"
      {...props}
    />
  )
}
