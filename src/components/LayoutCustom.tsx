import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function LayoutCustom({children}: any)
{
  return (
    <>
      <Navbar/>
      <div>{children}</div>
      <Footer/>
    </>
  )
}