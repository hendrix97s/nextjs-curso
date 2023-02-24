import Link from 'next/link'

export function AboutComponent()
{
  return (
    <>
      <ul>
        <li><Link href="/">Home</Link></li>
      </ul>

      <h1 className="text-3xl font-bold underline">About</h1>
    </>
  )
}