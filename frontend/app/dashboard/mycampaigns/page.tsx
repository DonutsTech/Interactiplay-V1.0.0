import MyCampaignsPainel from "@/components/plataform/MyCampaignsPainel";
import MyvideosPainel from "@/components/plataform/MyvideosPainel";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Interactiplay - Minhas Campanhas',
  description: 'Área de Minhas Campanhas da Interactiplay',
};


export default function Mycampaigns() {


  return (
    <>
      <MyCampaignsPainel />
    </>
  );
};
