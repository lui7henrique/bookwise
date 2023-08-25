import { SignIn } from '@phosphor-icons/react'
import Link from 'next/link'

export const SignInButton = () => {
  return (
    <div>
      <Link href="/login" className="flex items-center gap-3 font-bold">
        Fazer login
        <SignIn className="fill-green-100" width={20} height={20} />
      </Link>
    </div>
  )
}
