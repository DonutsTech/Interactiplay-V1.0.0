'use client';

import { ITestAB } from '@/@types/testeAB';
import styles from './CardTestAB.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFlask,
  faCode,
  faTrashCan,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import { formatDateBR } from '@/utils/stringUtils';
import { useEffect, useState } from 'react';

interface CardTestABProps {
  testAB: ITestAB;
  onEmbed?: (testAB: ITestAB) => void;
  onDelete?: (testABId: string) => void;
  onAnalytics?: (testAB: ITestAB) => void;
}

const CardTestAB = ({
  testAB,
  onEmbed,
  onDelete,
  onAnalytics,
}: CardTestABProps) => {
  const [campaignName, setCampaignName] = useState({
    campaignAName: 'Campanha A',
    campaignBName: 'Campanha B',
  });

  console.log('testAB recebido em CardTestAB:', testAB);

  useEffect(() => {
    if (!(testAB.CAMPAIGN_A && testAB.CAMPAIGN_B)) {
      setCampaignName({
        campaignAName: testAB.CAMPAIGN_A?.NAME ?? 'Campanha A',
        campaignBName: testAB.CAMPAIGN_B?.NAME ?? 'Campanha B',
      });

      return;
    } else {
      setCampaignName({
        campaignAName: testAB.CAMPAIGN_A.NAME,
        campaignBName: testAB.CAMPAIGN_B.NAME,
      });
      return
    }
  }, [testAB]);


  return (
    <div className={styles.card}>
      <div className={styles.card_icon}>
        <FontAwesomeIcon icon={faFlask} />
      </div>

      <div className={styles.card_info}>
        <h4
          className={styles.card_info_title}
          title={`${campaignName.campaignAName} × ${campaignName.campaignBName}`}
        >
          <span className={styles.card_info_title_slot}>A</span>
          {campaignName.campaignAName}
          <span className={styles.card_info_title_vs}>×</span>
          <span className={styles.card_info_title_slot}>B</span>
          {campaignName.campaignBName}
        </h4>

        <div className={styles.card_info_details}>
          {testAB.CREATED_AT && (
            <span className={styles.card_info_detail}>
              <strong>Criado em:</strong> {formatDateBR(testAB.CREATED_AT)}
            </span>
          )}
        </div>
      </div>

      <div className={styles.card_actions}>
        {onAnalytics && (
          <button
            className={styles.card_actions_btn}
            onClick={() => onAnalytics(testAB)}
            title="Ver análises do teste A/B"
          >
            <FontAwesomeIcon icon={faChartLine} />
          </button>
        )}
        {onEmbed && (
          <button
            className={`${styles.card_actions_btn} ${styles.card_actions_btn_embed}`}
            onClick={() => onEmbed(testAB)}
            title="Obter código de incorporação do teste A/B"
          >
            <FontAwesomeIcon icon={faCode} />
          </button>
        )}
        {onDelete && (
          <button
            className={`${styles.card_actions_btn} ${styles.card_actions_btn_delete}`}
            onClick={() => onDelete(testAB.ID)}
            title="Excluir teste A/B"
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        )}
      </div>
    </div>
  );
};

export default CardTestAB;
