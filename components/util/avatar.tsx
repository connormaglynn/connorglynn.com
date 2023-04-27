type Props = {
  name: string
  picture: string
}
import Image from 'next/image'

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        width={50}
        height={50}
        className="rounded-full mr-4"
        alt={name}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

export default Avatar
