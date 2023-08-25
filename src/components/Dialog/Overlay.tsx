/* eslint-disable prettier/prettier */
import {
  DialogOverlay as DialogPrimitiveOverlay,
  DialogOverlayProps,
} from '@radix-ui/react-dialog'

export const DialogOverlay = (props: DialogOverlayProps) => (
  <DialogPrimitiveOverlay
    className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/70"
    {...props}
  />
)
