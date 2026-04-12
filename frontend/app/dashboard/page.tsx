'use client';
import { AuthUserContext } from "@/context/AuthUserContext";
import { useContext } from "react";





export default function Dashboard() {

  const { authUser } = useContext(AuthUserContext);

  if (!authUser) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <h1>Olá {authUser.USER.NAME.split(' ')[0]}!</h1>

    </>
  );
};

