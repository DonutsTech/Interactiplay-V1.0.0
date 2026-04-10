'use client';
import { AuthUserContext } from "@/context/AuthUserContext";
import { useContext } from "react";





export default function Dashboard() {

  const { authUser } = useContext(AuthUserContext);
  console.log("Usuário autenticado:", authUser);

  if (!authUser) {
    // window.location.href = '/acess/login';
    // return null;

    console.log('Deu erro: ' + authUser);
    return <p>Carregando...</p>;
  };

  return (
    <>
      <h1>Olá {authUser.USER.NAME.split(' ')[0]}!</h1>

    </>
  );
};

