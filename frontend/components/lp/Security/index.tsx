import SliderCardLuz from "../SliderCardLuz";


const Security = () => {
const securityData = [
    {
      text: "Infraestrutura AWS"
    },
    {
      text: "99.9% Uptime"
    },
    {
      text: "Pagamentos Seguros"
    },
    {
      text: "LGPD Compliance"
    },
    {
      text: "Suporte 24/7"
    }
  ];
  return(
    <SliderCardLuz 
      dados={securityData}
      title="Segurança e Confiança"
      subtitle={`Sua segurança é nossa prioridade, utilizamos as melhores tecnologias do mercado.`}
    />
  );
};

export default Security;