import { Icon } from '@phosphor-icons/react'

type ProfileItemProps = {
  icon: Icon
  value: number | string
  label: string
}

export const ProfileItem = ({ icon: Icon, label, value }: ProfileItemProps) => {
  return (
    <div className="flex items-center gap-5">
      <Icon width={32} height={32} className="fill-green-100" />

      <div>
        <h6 className="font-bold">{value}</h6>
        <span className="text-gray-300">{label}</span>
      </div>
    </div>
  )
}

export const ProfileItemSkeleton = ({
  icon: Icon,
  label,
}: Omit<ProfileItemProps, 'value'>) => {
  return (
    <div className="flex items-center gap-5">
      <Icon width={32} height={32} className="fill-green-100" />

      <div>
        <div className="h-[16px] w-[40%] animate-pulse rounded-lg bg-gray-600" />

        <span className="text-gray-300">{label}</span>
      </div>
    </div>
  )
}
