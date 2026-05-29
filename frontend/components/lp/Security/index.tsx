import SliderCardLuz from "../SliderCardLuz";
import SliderCards from "../SliderCards";


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
      text: "Analytics integrado e Testes A/B"
    }
  ];
  return(
    <SliderCards
      dados={securityData}
      title="Segurança e Confiança"
      subtitle={`Sua segurança é nossa prioridade, utilizamos as melhores tecnologias do mercado.`}
    />
  );
};

export default Security;
