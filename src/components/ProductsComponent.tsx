import Link from "next/link"
import { Navbar } from "./Navbar"

export function ProductsComponent()
{
  return (
    <>
      <ul>
        <Navbar/>
        <li><Link href="/products/pants/red">Red Pants</Link></li>
        <li><Link href="/products/pants/blue">Blue Pants</Link></li>
      </ul>

      <h1 className="text-3xl font-bold underline">Products</h1>
    </>
  )
}