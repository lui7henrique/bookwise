import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Login() {
  const { push } = useRouter()

  const providers = [
    {
      logo: 'google.svg',
      label: 'Entrar com Google',
    },
    {
      logo: 'github.svg',
      label: 'Entrar com GitHub',
    },
    {
      logo: 'rocket.svg',
      label: 'Acessar como visitante',
    },
  ]

  return (
    <div className="flex h-screen w-screen gap-5 p-5">
      <aside className="relative hidden h-full w-[598px] items-center justify-center overflow-hidden rounded-xl md:flex">
        <Image
          src="/images/login.jpg"
          fill
          alt="Login aside background"
          quality={100}
          style={{
            objectFit: 'cover',
          }}
        />

        <Image
          src="/images/logos/logo.svg"
          width={183}
          height={48}
          alt="BookWise logo"
          className="z-20"
        />
      </aside>

      <div className="flex w-full items-center justify-center">
        <div className="w-full max-w-[372px]">
          <h1 className="text-2xl font-bold">Boas vindas</h1>
          <p>Faça seu login ou acesse como visitante.</p>

          <div className="mt-10 flex flex-col gap-4">
            {providers.map((provider) => {
              const { label, logo } = provider

              return (
                <button
                  className="flex cursor-pointer items-center justify-start gap-5 rounded-lg bg-gray-600 px-6 py-5 font-bold text-gray-200 transition-all hover:bg-gray-700"
                  key={label}
                  onClick={() => push('/app')}
                >
                  <Image
                    src={`/images/logos/${logo}`}
                    alt={label}
                    width={32}
                    height={32}
                  />

                  {label}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
