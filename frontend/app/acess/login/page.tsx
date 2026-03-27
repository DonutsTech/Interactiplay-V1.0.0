import FormLogin from "@/components/acess/FormLogin";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Interactiplay - Login',
  description: 'Área de acesso da Interactiplay',
};


export default function Login() {


  return (
    <>
      <FormLogin />
    </>
  );
};
