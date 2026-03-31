import SelectPlans from "@/components/acess/SelectPlans";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Interactiplay - Planos',
  description: 'Área de acesso da Interactiplay',
};


export default function Plans() {


  return (
    <>
      <SelectPlans />
    </>
  );
};