import { PantsComponent } from "@/components/PantsComponent";
import { useRouter } from "next/router";

export default function Pants()
{

  const router = useRouter();
  const  color =  router.query.color;

  return (
    <>
      <PantsComponent color={color}/>
    </>
  )
}