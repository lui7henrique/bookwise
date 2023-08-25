import {
  DialogTitle as DialogPrimitiveTitle,
  DialogTitleProps as DialogPrimitiveTitleProps,
} from '@radix-ui/react-dialog'

export const DialogTitle = (props: DialogPrimitiveTitleProps) => (
  <DialogPrimitiveTitle
    className="m-0 text-lg font-medium text-zinc-200"
    {...props}
  />
)
