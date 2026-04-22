import CampaignsLayout from '@/components/plataform/CampaignsLayout';
import TesteAbPainel from '@/components/plataform/TesteAbPainel';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interactiplay - Teste AB',
  description: 'Área de Teste AB da Interactiplay',
};

export default function TesteAb() {
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
        activeSection="testeab"
        sections={sections}
      >
        <TesteAbPainel />
      </CampaignsLayout>
    </>
  );
}
