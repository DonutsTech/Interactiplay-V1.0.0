import MyvideosPainel from "@/components/plataform/MyvideosPainel";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Interactiplay - Meus Vídeos',
  description: 'Área de Meus Vídeos da Interactiplay',
};


export default function Myvideos() {


  return (
    <>
      <MyvideosPainel />
    </>
  );
};
