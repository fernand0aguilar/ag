import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="header text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">Alexandar Gligorijevich</a>
      </Link>
      .
      <p className="header-btn">This is not the header anymore</p>
    </h2>
  )
}
