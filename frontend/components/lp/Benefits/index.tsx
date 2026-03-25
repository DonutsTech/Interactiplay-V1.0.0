'use client';
import SliderCardLuz from '../SliderCardLuz';

const Benefits = () => {
  const benefitsData = [
    {
      text: 'Maior engajamento até o pitch',
    },
    {
      text: 'Maior conversão',
    },
    {
      text: 'Mensagens personalizadas',
    },
    {
      text: 'Redução do CAC e maior ROI',
    },
    {
      text: 'Possibilidade de criar um funil personalizado de upsell / downsell',
    },
  ];

  return (
    <SliderCardLuz
      title="Benefícios"
      dados={benefitsData}
      button
      href="/acess/cadastro"
      label="Experimente 14 dias grátis"
    />
  );
};

export default Benefits;
