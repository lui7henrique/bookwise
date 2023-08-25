import {
  DialogDescription as DialogPrimitiveDescription,
  DialogDescriptionProps as DialogPrimitiveDescriptionProps,
} from '@radix-ui/react-dialog'

export const DialogDescription = (props: DialogPrimitiveDescriptionProps) => (
  <DialogPrimitiveDescription
    className="mt-0 text-sm leading-normal text-zinc-400"
    {...props}
  />
)
