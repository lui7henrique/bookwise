import * as DialogPrimitive from '@radix-ui/react-dialog'

import { DialogOverlay } from './Overlay'
import { DialogContent } from './Content'
import { DialogTitle } from './Title'
import { DialogDescription } from './Description'

export const Dialog = {
  Root: DialogPrimitive.Root,
  Trigger: DialogPrimitive.Trigger,
  Portal: DialogPrimitive.Portal,

  Overlay: DialogOverlay,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,

  Close: DialogPrimitive.Close,
}
