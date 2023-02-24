import Link from "next/link";

export default function NotFound(){
  return (
    <>
      <h1>404</h1>
      <p>Page not found</p>
      <Link href="/">
        <span className="">Go back to home</span>
      </Link>
    </>
  )
}
