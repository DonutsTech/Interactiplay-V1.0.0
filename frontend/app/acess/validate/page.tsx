import SelectPlans from "@/components/acess/SelectPlans";
import ValidateEmail from "@/components/acess/ValidateEmail";
import { Metadata } from "next";
import { Suspense } from "react";


export const metadata: Metadata = {
  title: 'Interactiplay - Validação do Email',
  description: 'Área de acesso da Interactiplay',
};


export default function Validate() {


  return (
    <Suspense fallback={null}>
      <ValidateEmail />
    </Suspense>
  );
};