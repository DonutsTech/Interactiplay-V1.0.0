
import DeniedPainel from "@/components/acess/DeniedPainel";
import { Metadata } from "next";
import { Suspense } from "react";


export const metadata: Metadata = {
  title: 'Interactiplay - Acesso Negado',
  description: 'Área de acesso da Interactiplay',
};


export default function Denied() {



  return (
    <Suspense fallback={null}>
      <DeniedPainel />
    </Suspense>
  );
};