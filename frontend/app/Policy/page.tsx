'use client';
import Link from 'next/link';
import styles from './Policy.module.scss';
import logo from '@/assets/images/logo_white_dg.svg';
import Image from 'next/image';
import { useRef } from 'react';

export default function Policy() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    const html2pdf = (await import('html2pdf.js')).default;
    
    const element = contentRef.current;
    if (!element) return;

    const opt = {
      margin: [3, 2, 2, 3] as [number, number, number, number],
      filename: 'InteractiPlay-Termos-e-Politica.pdf',
      image: { 
        type: 'jpeg' as const, 
        quality: 0.98 
      },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        letterRendering: true
      },
      jsPDF: { 
        unit: 'cm', 
        format: 'a4', 
        orientation: 'portrait' as const
      },
      pagebreak: { 
        mode: ['avoid-all', 'css', 'legacy'],
        before: '.sectionPrimary'
      }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className={styles.body}>
      <nav className={styles.nav}>
        <Link 
          href="/"
          className={styles.nav_logo}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Image 
            src={logo}
            alt="InteractiPlay Logo"
            className={styles.nav_logo_image}
            height={40}
            loading='lazy'
            draggable={false}
          />
        </Link>
        <div className={styles.nav_right}>
          <Link 
            href="/"
            className={styles.nav_right_link}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Home
          </Link>
          <button 
            onClick={handleDownloadPDF}
            className={styles.nav_right_download}
          >
            Baixar PDF
          </button>
        </div>
      </nav>
      
      <div ref={contentRef} className={styles.container}>
        <h1 className={styles.title}>
          INTERACTIPLAY — TERMOS DE USO E POLÍTICA DE PRIVACIDADE
        </h1>

        <h2 className={styles.sectionPrimary}>
          1) TERMOS DE USO — INTERACTIPLAY
        </h2>

        <h3 className={styles.sectionSecondary}>1.1. Objeto e Serviços</h3>
        <p className={styles.paragraph}>
          A InteractiPlay é uma plataforma SaaS para hospedagem e streaming de
          vídeos interativos, oferecendo planos vinculados a limites de plays,
          armazenamento e funcionalidades adicionais. O uso da Plataforma
          implica a aceitação integral destes Termos e da Política de
          Privacidade.
        </p>

        <h3 className={styles.sectionSecondary}>1.2. Cadastro e Conta</h3>
        <p className={styles.paragraph}>
          Para utilizar os serviços, é necessário realizar cadastro com
          informações verdadeiras e atualizadas. O usuário é responsável por
          manter a confidencialidade de seu login e senha e por todos os atos
          praticados em sua conta.
        </p>
        <p className={styles.paragraph}>
          A InteractiPlay poderá suspender ou excluir contas em caso de indícios
          de fraude, uso indevido ou violação destes Termos. O usuário
          compromete-se a notificar imediatamente a InteractiPlay em caso de
          suspeita de acesso indevido à sua conta, perda/comprometimento de
          credenciais ou uso não autorizado.
        </p>

        <h3 className={styles.sectionSecondary}>1.3. Idade de Utilização</h3>
        <p className={styles.paragraph}>
          O uso é permitido a maiores de 18 anos. Menores de idade somente
          poderão utilizar a Plataforma com autorização expressa de seus
          responsáveis legais, que assumem integral responsabilidade pelo uso.
        </p>

        <h3 className={styles.sectionSecondary}>1.4. Licença de Uso</h3>
        <p className={styles.paragraph}>
          O usuário recebe uma licença limitada, revogável, não exclusiva e
          intransferível para uso pessoal e comercial da Plataforma, sendo
          vedada a revenda, sublicenciamento, cópia, engenharia reversa ou
          qualquer prática que viole os direitos de propriedade intelectual da
          InteractiPlay.
        </p>
        <p className={styles.paragraph}>
          É vedado burlar ou contornar mecanismos técnicos, coletar dados por
          scraping, realizar engenharia reversa, publicar benchmarks que possam
          induzir erro ou testes de segurança sem consentimento prévio e
          escrito.
        </p>

        <h3 className={styles.sectionSecondary}>
          1.5. Período de Teste, Assinatura e Upgrade
        </h3>
        <p className={styles.paragraph}>
          Oferecemos teste gratuito de 14 dias ou 1.000 plays, o que ocorrer
          primeiro. Após o término do período de teste, será ativada
          automaticamente a assinatura do plano Essencial, salvo cancelamento
          prévio pelo usuário.
        </p>
        <p className={styles.paragraph}>
          Caso o usuário realize upgrade durante o ciclo, os valores e plays já
          utilizados serão abatidos do novo plano. A renovação é automática a
          cada mês.
        </p>

        <h3 className={styles.sectionSecondary}>1.6. Planos e Excedentes</h3>
        <ul className={styles.list}>
          <li>
            <strong>Essencial:</strong> 6.000 plays, até 20 vídeos, adicional de
            R$0,05/play.
          </li>
          <li>
            <strong>Profissional:</strong> 25.000 plays, até 50 vídeos,
            adicional de R$0,03/play.
          </li>
          <li>
            <strong>Empresarial:</strong> 50.000 plays, até 100 vídeos,
            adicional de R$0,02/play.
          </li>
        </ul>
        <p className={styles.paragraph}>
          Excedentes são cobrados automaticamente ou podem gerar upgrade de
          plano. O usuário será notificado via e-mail e/ou Plataforma.
        </p>

        <h4 className={styles.sectionTertiary}>1.6.1. Contagem de plays</h4>
        <p className={styles.paragraph}>
          Um "play" é contabilizado no momento em que o espectador inicia a
          reprodução do vídeo, independentemente do tempo assistido.
        </p>

        <h3 className={styles.sectionSecondary}>
          1.7. Cancelamento e Retenção de Conta
        </h3>
        <p className={styles.paragraph}>
          O usuário pode cancelar a assinatura a qualquer momento, com efeitos
          ao final do ciclo em curso, sem reembolso proporcional, salvo direito
          de arrependimento previsto em lei.
        </p>
        <p className={styles.paragraph}>
          Após o cancelamento, manteremos a conta, vídeos e dados por até 6
          (seis) meses para eventual reativação; depois, poderemos proceder à
          exclusão ou anonimização, conforme nossa Política de Privacidade. É
          responsabilidade do usuário realizar backup antes do encerramento.
        </p>

        <h3 className={styles.sectionSecondary}>1.8. Pagamentos</h3>
        <p className={styles.paragraph}>
          Os pagamentos são processados com segurança pela Stripe, conforme
          padrões internacionais de segurança (PCI DSS). A assinatura é renovada
          automaticamente até cancelamento pelo usuário, com a cobrança dos
          valores aplicáveis a cada ciclo.
        </p>

        <h3 className={styles.sectionSecondary}>1.9. Conteúdos Proibidos</h3>
        <p className={styles.paragraph}>
          É vedada a hospedagem de conteúdos ilícitos, incluindo, mas não se
          limitando a: violação de direitos autorais, discurso de ódio,
          exploração infantil, pornografia ilegal, violência extrema, golpes,
          fraudes, spam ou qualquer ato contrário à legislação.
        </p>

        <h3 className={styles.sectionSecondary}>
          1.10. Moderação de Conteúdos
        </h3>
        <p className={styles.paragraph}>
          A InteractiPlay poderá remover, sem aviso prévio, conteúdos ilegais ou
          que infrinjam direitos de terceiros. Mantemos canal de denúncia em
          denuncias@interactiplay.com.br.
        </p>
        <p className={styles.paragraph}>
          Denúncias devem indicar URL/ID do conteúdo e descrição objetiva da
          suposta violação. Conteúdos poderão ser indisponibilizados
          preventivamente enquanto avaliamos o caso.
        </p>

        <h3 className={styles.sectionSecondary}>
          1.11. Limitação de Responsabilidade
        </h3>
        <p className={styles.paragraph}>
          A InteractiPlay não se responsabiliza por indisponibilidades
          decorrentes de terceiros, falhas de conexão à internet, integrações
          externas incorretas ou eventos de força maior. Envidaremos esforços
          razoáveis para restabelecer o serviço em casos de manutenção ou falhas
          técnicas.
        </p>

        <h3 className={styles.sectionSecondary}>1.12. Alterações</h3>
        <p className={styles.paragraph}>
          Estes Termos poderão ser atualizados periodicamente. Alterações
          relevantes serão comunicadas por e-mail ou aviso na Plataforma.
        </p>

        <h3 className={styles.sectionSecondary}>
          1.13. Rescisão por justa causa
        </h3>
        <p className={styles.paragraph}>
          Poderemos suspender ou encerrar a conta, com ou sem aviso prévio, em
          casos de violação destes Termos, ordem legal, fraude, risco à
          segurança da Plataforma ou inadimplência, sem prejuízo da cobrança de
          valores devidos.
        </p>
        <p className={styles.paragraphNoIndent}>
          <strong>Foro:</strong> Uberlândia - MG
        </p>

        <h2 className={styles.sectionPrimary}>
          2) POLÍTICA DE PRIVACIDADE — INTERACTIPLAY
        </h2>

        <h3 className={styles.sectionSecondary}>
          2.1. Controladora e Encarregado (DPO)
        </h3>
        <p className={styles.paragraphNoIndent}>
          <strong>Controladora:</strong> MATHEUS FREITAS COUTO — MEI, CNPJ
          47.905.392/0001-00, Rua Antonio Francisco Rosa 231, Aclimação,
          Uberlândia/MG, CEP 38406064.
        </p>
        <p className={styles.paragraphNoIndent}>
          <strong>Encarregado (DPO):</strong> Matheus Couto —
          dpo@interactiplay.com.br.
        </p>

        <h4 className={styles.sectionTertiary}>2.1.1. Papéis no Tratamento</h4>
        <p className={styles.paragraph}>
          Atuamos como Controladora em relação aos dados de cadastro, cobrança e
          suporte de nossos clientes; e como Operadora em relação aos dados dos
          espectadores/leads coletados pelos clientes dentro da Plataforma,
          tratando-os por conta e ordem do cliente, conforme suas instruções.
        </p>

        <h3 className={styles.sectionSecondary}>2.2. Dados Coletados</h3>
        <p className={styles.paragraph}>
          Coletamos: nome, e-mail, telefone, CPF/CNPJ, métricas de uso, vídeos
          hospedados, dados de acesso (IP, navegador, dispositivo), integrações
          via API e demais registros técnicos necessários à operação da
          Plataforma.
        </p>
        <p className={styles.paragraph}>
          Dados de pagamento são tratados exclusivamente pela Stripe.
        </p>

        <h3 className={styles.sectionSecondary}>
          2.3. Finalidades e Bases Legais
        </h3>
        <p className={styles.paragraph}>
          Utilizamos os dados para: execução do contrato (prestação dos
          serviços), cumprimento de obrigações legais, legítimo interesse
          (segurança, prevenção a fraudes, melhoria da Plataforma, comunicação
          operacional e remarketing por até 6 meses), e consentimento
          (comunicações promocionais).
        </p>

        <h3 className={styles.sectionSecondary}>2.4. Retenção de Dados</h3>
        <p className={styles.paragraph}>
          Mantemos registros de acesso por 6 meses. Mantemos contas e conteúdos
          por até 6 meses após o cancelamento. Podemos manter dados básicos de
          contato para remarketing por até 6 meses.
        </p>
        <p className={styles.paragraph}>
          Após esses prazos, os dados poderão ser anonimizados ou excluídos, ou,
          quando houver obrigação legal de guarda, à anonimização preferencial
          dos dados até que seja possível a eliminação.
        </p>

        <h3 className={styles.sectionSecondary}>
          2.5. Compartilhamento de Dados
        </h3>
        <p className={styles.paragraph}>
          Podemos compartilhar dados com provedores de nuvem, hospedagem,
          pagamentos (Stripe), e-mail e antifraude, sempre com garantias de
          segurança. Os dados de pagamento são processados pela Stripe, na
          qualidade de controladora independente de dados financeiros.
        </p>

        <h3 className={styles.sectionSecondary}>
          2.6. Transferência Internacional
        </h3>
        <p className={styles.paragraph}>
          Os dados podem ser transferidos para servidores no exterior,
          adotando-se salvaguardas como Cláusulas Contratuais Padrão e seleção
          de fornecedores com certificações de segurança da informação (ISO/IEC
          27001 e 27701), assegurando nível adequado de proteção conforme a
          LGPD.
        </p>

        <h3 className={styles.sectionSecondary}>2.7. Direitos do Titular</h3>
        <p className={styles.paragraph}>
          O titular pode exercer os direitos de confirmação e acesso; correção;
          eliminação ou anonimização; portabilidade (quando tecnicamente
          possível); informação sobre compartilhamento; oposição a tratamentos
          baseados em legítimo interesse; e revogação de consentimento.
        </p>
        <p className={styles.paragraph}>
          Também pode solicitar explicações e revisão humana de decisões
          automatizadas relevantes. Os pedidos podem ser feitos ao DPO pelo
          e-mail dpo@interactiplay.com.br ou painel da conta, com resposta em
          até 15 dias.
        </p>

        <h3 className={styles.sectionSecondary}>2.8. Segurança</h3>
        <p className={styles.paragraph}>
          Adotamos medidas como criptografia, autenticação multifatorial,
          controles de acesso, monitoramento, treinamento periódico, auditorias,
          plano de resposta a incidentes e manutenção de Registro das Operações
          de Tratamento (RoPA).
        </p>
        <p className={styles.paragraph}>
          Em caso de incidente relevante, comunicaremos a ANPD e os titulares
          afetados.
        </p>

        <h3 className={styles.sectionSecondary}>
          2.9. Crianças e Adolescentes
        </h3>
        <p className={styles.paragraph}>
          Não coletamos dados de menores de 13 anos. Usuários entre 13 e 18 anos
          somente poderão utilizar a Plataforma e ter dados tratados com
          consentimento expresso documentado dos responsáveis legais.
        </p>

        <h3 className={styles.sectionSecondary}>2.10. Alterações</h3>
        <p className={styles.paragraph}>
          Revisamos esta Política ao menos a cada 6 meses ou diante de mudanças
          regulatórias. Alterações relevantes serão comunicadas por e-mail ou
          aviso na Plataforma.
        </p>

        <h3 className={styles.sectionSecondary}>2.11. Cookies</h3>
        <p className={styles.paragraph}>
          Utilizamos cookies estritamente necessários (funcionamento,
          autenticação e segurança), de desempenho (métricas), de funcionalidade
          (preferências) e de publicidade/remarketing. O titular pode recusar
          cookies não essenciais no banner ou no navegador.
        </p>
      </div>
    </div>
  );
}
