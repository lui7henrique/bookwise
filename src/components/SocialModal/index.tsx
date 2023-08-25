import { ReactNode } from 'react'
import { Dialog } from '../Dialog'
import { LoginProvider } from 'src/pages/login'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

type SocialModalProps = {
  children: ReactNode
}

export const SocialModal = (props: SocialModalProps) => {
  const providers: LoginProvider[] = [
    {
      logo: 'google.svg',
      label: 'Entrar com Google',
      provider: 'google',
    },
    {
      logo: 'github.svg',
      label: 'Entrar com GitHub',
      provider: 'github',
    },
  ]

  return (
    <Dialog.Root>
      <Dialog.Trigger>{props.children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />

        <Dialog.Content>
          <div className="flex flex-col items-center justify-center px-16 py-8">
            <h6 className="text-sm font-bold">
              Faça login para deixar sua avaliação
            </h6>

            <div className="mt-6 flex w-full flex-col gap-4">
              {providers.map((provider) => {
                const { label, logo } = provider

                return (
                  <button
                    className="flex  cursor-pointer items-center justify-start gap-5 rounded-lg bg-gray-600 px-6 py-4 font-bold text-gray-200 transition-all hover:opacity-50"
                    key={label}
                    onClick={() => {
                      signIn(provider.provider, {
                        callbackUrl: '/app',
                      })
                    }}
                  >
                    <Image
                      src={`/images/logos/${logo}`}
                      alt={label}
                      width={24}
                      height={24}
                    />

                    {label}
                  </button>
                )
              })}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
