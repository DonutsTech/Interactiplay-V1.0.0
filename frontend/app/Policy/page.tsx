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
          INTERACTIPLAY
          <br />
          Termos de Uso e Política de Privacidade
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
          informações verdadeiras e atualizadas. O cadastro somente é concluído
          após a aceitação expressa destes Termos e da Política de Privacidade
          mediante checkbox obrigatório. O usuário é responsável por manter a
          confidencialidade de seu login e senha e por todos os atos praticados
          em sua conta. A InteractiPlay poderá suspender ou excluir contas em
          caso de indícios de fraude, uso indevido ou violação destes Termos. O
          usuário compromete-se a notificar imediatamente a InteractiPlay em
          caso de suspeita de acesso indevido, perda ou comprometimento de
          credenciais ou uso não autorizado.
        </p>

        <h3 className={styles.sectionSecondary}>1.3. Idade de Utilização</h3>
        <p className={styles.paragraph}>
          O uso é permitido exclusivamente a maiores de 18 anos. Menores de
          idade não estão autorizados a utilizar a Plataforma ou ter seus dados
          tratados, salvo mediante autorização expressa e documentada de seus
          responsáveis legais, que assumem integral responsabilidade pelo uso.
        </p>

        <h3 className={styles.sectionSecondary}>
          1.4. Licença de Uso e Propriedade Intelectual
        </h3>
        <p className={styles.paragraph}>
          O usuário recebe uma licença limitada, revogável, não exclusiva e
          intransferível para uso pessoal e comercial da Plataforma. É vedada a
          revenda, sublicenciamento, cópia, engenharia reversa, scraping,
          publicação de benchmarks que possam induzir erro ou testes de
          segurança sem consentimento prévio e escrito.
        </p>
        <p className={styles.paragraph}>
          O conteúdo hospedado pelo usuário permanece de sua exclusiva
          propriedade. A InteractiPlay não adquire qualquer direito sobre os
          vídeos ou materiais enviados, recebendo apenas uma licença técnica,
          limitada e não exclusiva, para transmitir, armazenar e processar o
          conteúdo enquanto o contrato estiver vigente e exclusivamente para a
          prestação dos serviços contratados.
        </p>

        <h3 className={styles.sectionSecondary}>
          1.5. Período de Teste, Assinatura e Upgrade
        </h3>
        <p className={styles.paragraph}>
          Oferecemos teste gratuito de 14 (quatorze) dias corridos ou 1.000
          (mil) plays, o que ocorrer primeiro. Para ativar o período de teste,
          é necessário o cadastro de um meio de pagamento válido. Ao término do
          período de teste por decurso do prazo ou consumo do limite de plays,
          será iniciada automaticamente a cobrança do plano escolhido pelo
          usuário no momento do cadastro, salvo cancelamento prévio.
        </p>
        <p className={styles.paragraph}>
          O usuário será notificado por e-mail com antecedência mínima de 3
          (três) dias do encerramento do período de teste, sendo informado
          sobre o plano contratado e o valor a ser cobrado. Caso o usuário
          realize upgrade durante o ciclo, os valores e plays já utilizados
          serão abatidos do novo plano. A renovação é automática a cada mês.
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
          Ao atingir o limite de plays do plano contratado, plays adicionais
          serão cobrados automaticamente na taxa do plano vigente. O upgrade de
          plano é opcional e deve ser realizado manualmente pelo usuário no
          painel da Plataforma. O usuário será notificado via e-mail e/ou
          Plataforma ao atingir o limite contratado.
        </p>

        <h4 className={styles.sectionTertiary}>1.6.1. Contagem de Plays</h4>
        <p className={styles.paragraph}>
          Um play é contabilizado no momento em que o espectador inicia a
          reprodução do vídeo, independentemente do tempo assistido ou da
          quantidade de caminhos interativos (Bonds) percorridos durante a
          mesma sessão. A navegação entre diferentes Bonds dentro de um mesmo
          vídeo não gera plays adicionais. Cada nova reprodução iniciada,
          inclusive por atualização de página (refresh) ou novo acesso, é
          contabilizada como um play adicional e independente.
        </p>

        <h4 className={styles.sectionTertiary}>1.6.2. Plays Bloqueados</h4>
        <p className={styles.paragraph}>
          Após o cancelamento da assinatura ou durante período de inadimplência,
          os vídeos hospedados permanecem ativos por até 6 (seis) meses. Nesse
          período, o espectador poderá iniciar a reprodução, porém o vídeo será
          interrompido imediatamente, gerando o registro de um play bloqueado.
          Plays bloqueados não geram cobranças adicionais ao usuário cancelado,
          mas são registrados no analytics da Plataforma e poderão ser
          utilizados pela InteractiPlay para fins de remarketing, demonstrando
          ao usuário o volume de oportunidades perdidas no período.
        </p>

        <h3 className={styles.sectionSecondary}>
          1.7. Cancelamento e Retenção de Conta
        </h3>
        <p className={styles.paragraph}>
          O usuário pode cancelar a assinatura a qualquer momento pelo painel da
          Plataforma, com efeitos ao final do ciclo em curso. Durante esse
          período, o usuário poderá exportar dados e realizar backups. Após o
          cancelamento, manteremos a conta, vídeos e dados por até 6 (seis)
          meses para eventual reativação; decorrido esse prazo, poderemos
          proceder à exclusão ou anonimização dos dados, conforme nossa Política
          de Privacidade. É responsabilidade do usuário realizar backup antes do
          encerramento.
        </p>

        <h3 className={styles.sectionSecondary}>1.8. Reembolsos</h3>
        <h4 className={styles.sectionTertiary}>1.8.1. Direito de Arrependimento</h4>
        <p className={styles.paragraph}>
          Em observância ao art. 49 do Código de Defesa do Consumidor, o
          usuário poderá exercer o direito de arrependimento exclusivamente na
          primeira contratação do plano, dentro do prazo de 7 (sete) dias
          corridos contados da confirmação do pagamento, mediante solicitação ao
          suporte. O direito de arrependimento não se aplica às renovações
          mensais subsequentes.
        </p>
        <h4 className={styles.sectionTertiary}>1.8.2. Reembolso Facilitado pós-Trial</h4>
        <p className={styles.paragraph}>
          Caso o usuário não tenha cancelado o período de teste e seja cobrado
          na primeira mensalidade por esquecimento, poderá solicitar reembolso
          integral em até 10 (dez) dias corridos após essa cobrança, desde que
          não tenha havido uso substancial da Plataforma, a critério da
          InteractiPlay. Entende-se como uso substancial o upload de vídeos,
          criação de campanhas ou configuração de integrações.
        </p>
        <h4 className={styles.sectionTertiary}>1.8.3. Ausência de Reembolso após Segundo Ciclo</h4>
        <p className={styles.paragraph}>
          A partir da segunda cobrança mensal, não haverá reembolso
          proporcional ou integral, independentemente do uso efetivo da
          Plataforma no período. O acesso ao painel caracteriza início da
          prestação do serviço, que é considerado disponibilizado com a
          liberação da infraestrutura.
        </p>
        <h4 className={styles.sectionTertiary}>1.8.4. Exceções</h4>
        <p className={styles.paragraph}>
          Excepcionalmente, poderá haver reembolso nas seguintes hipóteses: (a)
          falha técnica grave e comprovada na infraestrutura da InteractiPlay
          que inviabilize o uso por período superior a 72 (setenta e duas)
          horas ininterruptas; (b) cobrança em duplicidade comprovada. Em tais
          casos, o pedido deve ser formalizado em até 7 (sete) dias corridos da
          ocorrência pelo canal de suporte.
        </p>

        <h3 className={styles.sectionSecondary}>1.9. Pagamentos</h3>
        <p className={styles.paragraph}>
          Os pagamentos são processados com segurança pela Stripe, conforme
          padrões internacionais de segurança (PCI DSS). A assinatura é
          renovada automaticamente até cancelamento pelo usuário. A
          impossibilidade de cobrança por inadimplência poderá acarretar
          suspensão ou cancelamento da conta, sem prejuízo da cobrança dos
          valores devidos.
        </p>

        <h3 className={styles.sectionSecondary}>1.10. Conteúdos Proibidos</h3>
        <p className={styles.paragraph}>
          É vedada a hospedagem de conteúdos ilícitos, incluindo, mas não se
          limitando a: violação de direitos autorais, discurso de ódio,
          exploração infantil, pornografia ilegal, violência extrema, golpes,
          fraudes, spam, promessas enganosas ou qualquer ato contrário à
          legislação vigente.
        </p>

        <h3 className={styles.sectionSecondary}>
          1.11. Moderação de Conteúdos e Canal de Denúncias
        </h3>
        <p className={styles.paragraph}>
          A InteractiPlay adota política de moderação proativa,
          comprometendo-se a analisar e remover, sem aviso prévio, conteúdos
          ilegais ou que infrinjam direitos de terceiros, em conformidade com o
          Marco Civil da Internet (Lei 12.965/2014) e sua interpretação pelo
          STF.
        </p>
        <p className={styles.paragraph}>
          Denúncias devem ser enviadas para denuncias@interactiplay.com.br e
          devem conter obrigatoriamente: (1) URL ou ID do conteúdo infrator;
          (2) data em que o conteúdo foi verificado; (3) descrição objetiva da
          violação alegada; (4) provas disponíveis (prints, documentos ou
          links). Ao enviar uma denúncia, o denunciante declara, sob as penas
          da lei, que as informações prestadas são verdadeiras e que está ciente
          das consequências legais de uma denúncia falsa.
        </p>
        <p className={styles.paragraph}>
          Conteúdos poderão ser indisponibilizados preventivamente durante a
          avaliação. O usuário responsável pelo conteúdo será notificado sempre
          que possível.
        </p>

        <h3 className={styles.sectionSecondary}>
          1.12. Responsabilidade pelo Conteúdo e Direito de Regresso
        </h3>
        <p className={styles.paragraph}>
          O usuário é exclusivamente responsável pelo conteúdo hospedado na
          Plataforma, incluindo sua legalidade, veracidade e respeito a direitos
          de terceiros. A InteractiPlay não se responsabiliza por conteúdos
          publicados pelos usuários.
        </p>
        <p className={styles.paragraph}>
          Caso a InteractiPlay seja responsabilizada civil, administrativa ou
          judicialmente em decorrência de conteúdo hospedado pelo usuário,
          poderá exercer o direito de regresso, cobrando do usuário todos os
          custos, despesas, indenizações, honorários advocatícios e demais
          gastos decorrentes da infração. O usuário desde já concorda em isentar
          e indenizar a InteractiPlay por quaisquer danos ou processos
          originados do conteúdo por ele hospedado.
        </p>

        <h3 className={styles.sectionSecondary}>
          1.13. Disponibilidade e Limitação de Responsabilidade
        </h3>
        <p className={styles.paragraph}>
          A InteractiPlay adota infraestrutura com redundância geográfica
          automática e rotinas de backup diário, assegurando recuperação de
          dados e continuidade do serviço em caso de falhas técnicas. Em
          situações de indisponibilidade, os sistemas de contingência são
          ativados automaticamente, sem necessidade de intervenção manual.
        </p>
        <p className={styles.paragraph}>
          A InteractiPlay não se responsabiliza por indisponibilidades
          decorrentes de falhas de terceiros, problemas de conexão à internet,
          integrações externas incorretas ou eventos de força maior. Os níveis
          de disponibilidade aplicáveis a cada plano poderão ser definidos em
          Acordo de Nível de Serviço (SLA) específico, disponível na Plataforma
          quando vigente.
        </p>

        <h3 className={styles.sectionSecondary}>1.14. Alterações</h3>
        <p className={styles.paragraph}>
          Estes Termos poderão ser atualizados periodicamente. Alterações
          relevantes serão comunicadas por e-mail ou aviso na Plataforma com
          antecedência mínima de 10 (dez) dias. A continuidade do uso após a
          comunicação implica aceitação dos novos termos.
        </p>

        <h3 className={styles.sectionSecondary}>
          1.15. Rescisão por Justa Causa
        </h3>
        <p className={styles.paragraph}>
          Poderemos suspender ou encerrar a conta, com ou sem aviso prévio, em
          casos de violação destes Termos, ordem legal, fraude, risco à
          segurança da Plataforma ou inadimplência, sem prejuízo da cobrança de
          valores devidos.
        </p>
        <h3 className={styles.sectionSecondary}>1.16. Ciência Expressa do Usuário</h3>
        <p className={styles.paragraph}>
          Ao concluir o cadastro ou renovar um plano, o usuário declara
          expressamente que:
        </p>
        <ul className={styles.list}>
          <li>Leu integralmente estes Termos de Uso e a Política de Privacidade.</li>
          <li>Compreende que o acesso à Plataforma caracteriza início da prestação do serviço.</li>
          <li>Compreende que, a partir da segunda cobrança mensal, não haverá reembolso.</li>
          <li>
            Aceita que plays excedentes serão cobrados automaticamente conforme
            a tabela do plano vigente.
          </li>
          <li>
            Concorda que a cobrança se refere à disponibilização da
            infraestrutura, independentemente do uso efetivo.
          </li>
        </ul>
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
          Uberlândia/MG, CEP 38406-064.
        </p>
        <p className={styles.paragraphNoIndent}>
          <strong>Encarregado (DPO):</strong> Matheus Couto —
          dpo@interactiplay.com.br
        </p>

        <h4 className={styles.sectionTertiary}>2.1.1. Papéis no Tratamento</h4>
        <p className={styles.paragraph}>
          Atuamos como Controladora em relação aos dados de cadastro, cobrança e
          suporte de nossos clientes. Atuamos como Operadora em relação aos
          dados dos espectadores e demais terceiros cujos dados sejam
          processados dentro da Plataforma por instrução do cliente,
          tratando-os exclusivamente por conta e ordem do cliente, que é o
          Controlador responsável pela base legal dessa coleta.
        </p>
        <p className={styles.paragraph}>
          O cliente que utilizar a Plataforma para processar dados de terceiros
          (espectadores, leads ou usuários finais) é responsável por manter sua
          própria Política de Privacidade e por garantir que o tratamento está
          amparado por base legal válida nos termos da LGPD.
        </p>

        <h3 className={styles.sectionSecondary}>2.2. Dados Coletados</h3>
        <p className={styles.paragraph}>
          Coletamos diretamente de nossos clientes: nome, e-mail, telefone,
          CPF/CNPJ, dados de acesso (IP, navegador, dispositivo), métricas de
          uso da Plataforma, vídeos hospedados, integrações via API e demais
          registros técnicos necessários à operação. Dados de pagamento são
          tratados exclusivamente pela Stripe.
        </p>
        <p className={styles.paragraph}>
          Como Operadora, processamos também dados técnicos dos espectadores dos
          vídeos hospedados (IP, dispositivo, navegador, dados de sessão e
          métricas de reprodução), por conta e ordem do cliente que hospeda o
          conteúdo.
        </p>

        <h3 className={styles.sectionSecondary}>
          2.3. Finalidades e Bases Legais
        </h3>
        <p className={styles.paragraph}>
          Utilizamos os dados para: execução do contrato (prestação dos
          serviços), cumprimento de obrigações legais, legítimo interesse
          (segurança, prevenção a fraudes, melhoria da Plataforma, comunicação
          operacional e remarketing por até 6 meses após o cancelamento) e
          consentimento (comunicações promocionais).
        </p>

        <h3 className={styles.sectionSecondary}>2.4. Retenção de Dados</h3>
        <p className={styles.paragraph}>
          Mantemos registros de acesso por 6 meses, conforme a Lei
          12.965/2014. Mantemos contas, vídeos e conteúdos por até 6 (seis)
          meses após o cancelamento, para fins de eventual reativação e
          remarketing. Após esse prazo, os dados serão anonimizados ou
          excluídos, salvo obrigação legal de guarda.
        </p>

        <h3 className={styles.sectionSecondary}>
          2.5. Compartilhamento de Dados
        </h3>
        <p className={styles.paragraph}>
          Podemos compartilhar dados com provedores de nuvem, hospedagem,
          pagamentos (Stripe), e-mail e antifraude, sempre com garantias
          contratuais de segurança e confidencialidade. Os dados de pagamento
          são processados pela Stripe, na qualidade de controladora independente
          de dados financeiros. Em caso de reestruturação societária, fusão ou
          aquisição, os dados poderão ser transferidos ao novo controlador,
          mantidas as garantias de proteção.
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
          O titular pode exercer os direitos de: confirmação e acesso;
          correção; eliminação ou anonimização; portabilidade (quando
          tecnicamente possível); informação sobre compartilhamento; oposição a
          tratamentos baseados em legítimo interesse; revogação de
          consentimento; e revisão humana de decisões automatizadas relevantes.
          Os pedidos podem ser feitos ao DPO pelo e-mail
          dpo@interactiplay.com.br ou pelo painel da conta, com resposta em até
          15 dias.
        </p>

        <h3 className={styles.sectionSecondary}>2.8. Segurança</h3>
        <p className={styles.paragraph}>
          Adotamos medidas como criptografia, autenticação multifatorial,
          controles de acesso, monitoramento, treinamento periódico, auditorias,
          plano de resposta a incidentes e manutenção de Registro das Operações
          de Tratamento (RoPA). Em caso de incidente relevante, comunicaremos a
          ANPD e os titulares afetados nos prazos legais.
        </p>

        <h3 className={styles.sectionSecondary}>
          2.9. Crianças e Adolescentes
        </h3>
        <p className={styles.paragraph}>
          O uso da Plataforma é restrito a maiores de 18 anos. Não coletamos
          dados de menores de 18 anos. Caso identificada a utilização por menor
          sem a devida autorização, a conta poderá ser imediatamente suspensa e
          os dados serão excluídos.
        </p>

        <h3 className={styles.sectionSecondary}>2.10. Alterações</h3>
        <p className={styles.paragraph}>
          Revisamos esta Política ao menos a cada 6 meses ou diante de mudanças
          regulatórias. Alterações relevantes serão comunicadas por e-mail ou
          aviso na Plataforma.
        </p>

        <h3 className={styles.sectionSecondary}>2.11. Cookies e Analytics</h3>
        <p className={styles.paragraph}>
          Esta seção constitui a Política de Cookies da InteractiPlay.
        </p>
        <p className={styles.paragraph}>
          Utilizamos os seguintes tipos de cookies:
        </p>
        <ul className={styles.list}>
          <li>
            <strong>Estritamente necessários:</strong> essenciais ao
            funcionamento da Plataforma, autenticação e segurança. Não podem ser
            recusados sem comprometer o uso do serviço.
          </li>
          <li>
            <strong>Desempenho:</strong> coleta de métricas agregadas de uso da
            Plataforma para fins de melhoria contínua.
          </li>
          <li>
            <strong>Funcionalidade:</strong> armazenamento de preferências do
            usuário (idioma, configurações de interface).
          </li>
          <li>
            <strong>Publicidade e remarketing:</strong> utilizados para exibir
            comunicações relevantes ao usuário por até 6 meses após o
            cancelamento ou fim do período de teste.
          </li>
        </ul>
        <p className={styles.paragraph}>
          O titular pode recusar cookies não essenciais a qualquer momento pelo
          banner de consentimento exibido no primeiro acesso ou pelas
          configurações do navegador. A recusa não prejudica o acesso às
          funcionalidades principais da Plataforma.
        </p>

        <h4 className={styles.sectionTertiary}>2.11.1. Analytics Nativo do Player</h4>
        <p className={styles.paragraph}>
          A InteractiPlay utiliza um sistema de analytics desenvolvido
          nativamente, integrado ao player de vídeo, com a finalidade de
          fornecer ao cliente métricas de desempenho de suas campanhas e vídeos.
          Nenhum dado coletado pelo analytics é compartilhado com terceiros para
          fins publicitários.
        </p>
        <p className={styles.paragraph}>Os dados coletados são organizados nas seguintes categorias:</p>
        <p className={styles.paragraph}><strong>Métricas gerais de campanha</strong></p>
        <ul className={styles.list}>
          <li>Quantidade de visualizações (views)</li>
          <li>Quantidade de plays iniciados</li>
          <li>Taxa de conversão para assistir (plays / views)</li>
          <li>Quantidade de plays bloqueados por limite de plano</li>
          <li>Quantidade de vídeos ativos na campanha</li>
          <li>Identificação do vídeo com melhor desempenho (Top Vídeo)</li>
        </ul>
        <p className={styles.paragraph}><strong>Gráficos de desempenho de views</strong></p>
        <ul className={styles.list}>
          <li>Views por dia (evolução temporal)</li>
          <li>Views por dispositivo (mobile ou desktop)</li>
          <li>Views por vídeo</li>
        </ul>
        <p className={styles.paragraph}><strong>Teste A/B</strong></p>
        <ul className={styles.list}>
          <li>Views do Vídeo A e do Vídeo B</li>
          <li>Taxa de conversão do Vídeo A e do Vídeo B</li>
        </ul>
      </div>
    </div>
  );
}
