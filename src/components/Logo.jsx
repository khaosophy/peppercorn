import Image from 'next/image';

export default function Logo(props) {
  return (
    <Image src="/logo.png" alt="Logo" {...props} />
  )
}
