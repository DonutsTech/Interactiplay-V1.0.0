

import FormResetPassword from "@/components/acess/FormResetPassword";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Interactiplay - Resetar minha senha',
  description: 'Área de acesso da Interactiplay',
};


export default function ResetPassword() {


  return (
    <>
    <FormResetPassword />
    </>
  );
};