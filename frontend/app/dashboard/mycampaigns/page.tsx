import CampaignsLayout from '@/components/plataform/CampaignsLayout';
import MyCampaignsPainel from '@/components/plataform/MyCampaignsPainel';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interactiplay - Minhas Campanhas',
  description: 'Área de Minhas Campanhas da Interactiplay',
};

export default function Mycampaigns() {
  const sections = [
    { id: 'campanha', label: 'Minhas Campanhas' },
    {
      id: 'testeab',
      label: 'Teste AB',
      path: '/dashboard/mycampaigns/testeab',
    },
  ];

  return (
    <>
      <CampaignsLayout
        activeSection="campanha"
        sections={sections}
      >
        <MyCampaignsPainel />
      </CampaignsLayout>
    </>
  );
}
