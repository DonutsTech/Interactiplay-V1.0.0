import FormForgotPassword from "@/components/acess/FormForgotPassword";
import FormLogin from "@/components/acess/FormLogin";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Interactiplay - Esqueci minha senha',
  description: 'Área de acesso da Interactiplay',
};


export default function ForgotPassword() {


  return (
    <>
    <FormForgotPassword />
    </>
  );
};