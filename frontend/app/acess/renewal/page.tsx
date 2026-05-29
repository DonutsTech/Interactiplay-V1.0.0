
import SelectPlansRenewal from "@/components/acess/SelectPlans/SelectPlansRenewal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactiplay - Renovação",
  description: "Área de renovação de planos da Interactiplay",
};

export default function Renewal() {
  return (
    <>
      <SelectPlansRenewal />
    </>
  );
}
