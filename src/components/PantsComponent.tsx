import { Navbar } from "./Navbar"

type PropsColor = {
  color: String
}

export function PantsComponent( props: PropsColor) {
  return (
    <>
      <Navbar/>
      <h1 className="text-3xl font-bold underline">Pants</h1>
      <p className="text-xl">Color: {props.color}</p>
    </>
  )
}