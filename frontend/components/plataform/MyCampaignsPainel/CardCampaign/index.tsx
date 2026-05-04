'use client';

import { ICampaign } from '@/@types/campaign';
import styles from './CardCampaign.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faTrashCan,
  faPencil,
  faLock,
  faBullhorn,
  faChartLine,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import { formatDateBR } from '@/utils/stringUtils';

interface CardCampaignProps {
  campaign: ICampaign;
  onDelete?: (campaignId: string) => void;
  onEdit?: (campaign: ICampaign) => void;
  onView?: (campaign: ICampaign) => void;
  onAnalytics?: (campaign: ICampaign) => void;
  onEmbed?: (campaign: ICampaign) => void;
  vinculoTestAB?: boolean;
}

const CardCampaign = ({
  campaign,
  onDelete,
  onEdit,
  onView,
  onAnalytics,
  onEmbed,
  vinculoTestAB = false,
}: CardCampaignProps) => {
  const videosCount = campaign.CAMPAIGN_VIDEOS?.length || 0;

  return (
    <div className={styles.campaignCard}>

      <div className={styles.campaignCard_icon}>
        <FontAwesomeIcon icon={faBullhorn} />
      </div>

      <div className={styles.campaignCard_info}>
        <h4 className={styles.campaignCard_info_title} title={campaign.NAME}>
          {campaign.NAME}
        </h4>

        <div className={styles.campaignCard_info_details}>
          <span className={styles.campaignCard_info_detail}>
            <strong>Vídeos:</strong> {videosCount}
          </span>
          <span className={styles.campaignCard_info_detail}>
            <strong>Criada em:</strong> {formatDateBR(campaign.CREATED_AT)}
          </span>
          {campaign.UPDATED_AT &&
            campaign.UPDATED_AT !== campaign.CREATED_AT && (
              <span className={styles.campaignCard_info_detail}>
                <strong>Atualizada em:</strong> {formatDateBR(campaign.UPDATED_AT)}
              </span>
            )}
        </div>
      </div>

      <div className={styles.campaignCard_actions}>
        {vinculoTestAB && (
          <div
            className={styles.campaignCard_actions_vinculo}
            title="Campanha vinculada a um teste A/B ativo"
          >
            <FontAwesomeIcon
              icon={faLock}
              className={styles.campaignCard_actions_vinculo_icon}
            />
          </div>
        )}
        {onView && (
          <button
            className={styles.campaignCard_actions_btn}
            onClick={() => onView(campaign)}
            title="Visualizar campanha"
          >
            <FontAwesomeIcon icon={faEye} />
          </button>
        )}
        {onAnalytics && (
          <button
            className={styles.campaignCard_actions_btn}
            onClick={() => onAnalytics(campaign)}
            title="Ver análises da campanha"
          >
            <FontAwesomeIcon icon={faChartLine} />
          </button>
        )}
        {onEmbed && (
          <button
            className={`${styles.campaignCard_actions_btn} ${styles.campaignCard_actions_btn_embed}`}
            onClick={() => onEmbed(campaign)}
            title="Obter código de incorporação"
          >
            <FontAwesomeIcon icon={faCode} />
          </button>
        )}
        {onEdit && (
          <button
            className={styles.campaignCard_actions_btn}
            onClick={() => onEdit(campaign)}
            title="Editar campanha"
          >
            <FontAwesomeIcon icon={faPencil} />
          </button>
        )}
        {onDelete && (
          <button
            className={`${styles.campaignCard_actions_btn} ${styles.campaignCard_actions_btn_delete}`}
            onClick={() => onDelete(campaign.ID)}
            title={vinculoTestAB ? 'Campanha vinculada a teste A/B ativo' : 'Excluir campanha'}
            disabled={vinculoTestAB}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        )}
      </div>
    </div>
  );
};

export default CardCampaign;