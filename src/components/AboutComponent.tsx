import Link from 'next/link'
import { Navbar } from './Navbar'

export function AboutComponent()
{
  return (
    <>
      <ul>
        <Navbar/>
      </ul>

      <h1 className="text-3xl font-bold underline">About</h1>
    </>
  )
}