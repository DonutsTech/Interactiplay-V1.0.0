'use client';
import SliderCardLuz from '../SliderCardLuz';

const Benefits = () => {
  const benefitsData = [
    {
      text: 'Mais leads chegam até a oferta',
    },
    {
      text: 'Conversão maior sem gastar mais',
    },
    {
      text: 'Cada lead ouve a mensagem certa',
    },
    {
      text: 'Menor CAC e ROI maior',
    },
    {
      text: 'Funil personalizado de upsell e downsell',
    },
  ];

  return (
    <SliderCardLuz
      title="Benefícios"
      dados={benefitsData}
      button
      href="/acess/cadastro"
      label="Experimente até 14 dias grátis"
    />
  );
};

export default Benefits;
