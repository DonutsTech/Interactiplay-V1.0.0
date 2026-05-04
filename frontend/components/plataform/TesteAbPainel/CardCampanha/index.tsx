'use client';

import { ICampaign } from '@/@types/campaign';
import { formatDateBR } from '@/utils/stringUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faLock } from '@fortawesome/free-solid-svg-icons';
import styles from './CardCampanha.module.scss';

interface CardCampanhaProps {
  campaign: ICampaign;
  isBlocked?: boolean;
  blockReason?: string;
  isSelected?: boolean;
  slotLabel?: 'A' | 'B';
  onSelect?: (campaign: ICampaign) => void;
  className?: string;
}

const CardCampanha = ({
  campaign,
  isBlocked = false,
  blockReason = 'Esta campanha ja participa de um teste A/B.',
  isSelected = false,
  slotLabel,
  onSelect,
  className,
}: CardCampanhaProps) => {
  const videosCount = campaign.CAMPAIGN_VIDEOS?.length || 0;

  const handleClick = () => {
    if (isBlocked || !onSelect) {
      return;
    }

    onSelect(campaign);
  };

  const composedClassName = [
    styles.campaignCard,
    isBlocked ? styles.blocked : '',
    !isBlocked && isSelected && slotLabel === 'A' ? styles.selectedA : '',
    !isBlocked && isSelected && slotLabel === 'B' ? styles.selectedB : '',
    !isBlocked && isSelected && !slotLabel ? styles.selected : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={composedClassName}
      onClick={handleClick}
      type='button'
      disabled={isBlocked}
      title={isBlocked ? blockReason : campaign.NAME}
      aria-label={isBlocked ? `${campaign.NAME} indisponivel` : `Selecionar ${campaign.NAME}`}
    >
      <div className={styles.campaignCard_icon}>
        <FontAwesomeIcon icon={faBullhorn} />
      </div>

      <div className={styles.campaignCard_info}>
        <h4 className={styles.campaignCard_info_title} title={campaign.NAME}>
          {campaign.NAME}
        </h4>

        <div className={styles.campaignCard_info_details}>
          <span className={styles.campaignCard_info_detail}>
            <strong>Videos:</strong> {videosCount}
          </span>
          <span className={styles.campaignCard_info_detail}>
            <strong>Criada em:</strong> {formatDateBR(campaign.CREATED_AT)}
          </span>
          {campaign.UPDATED_AT && campaign.UPDATED_AT !== campaign.CREATED_AT && (
            <span className={styles.campaignCard_info_detail}>
              <strong>Atualizada em:</strong> {formatDateBR(campaign.UPDATED_AT)}
            </span>
          )}
        </div>
      </div>

      {isBlocked && (
        <span className={styles.badge} aria-hidden='true'>
          <FontAwesomeIcon icon={faLock} /> Em teste A/B
        </span>
      )}

      {!isBlocked && isSelected && slotLabel && (
        <span
          className={`${styles.slotBadge} ${slotLabel === 'A' ? styles.slotBadge_a : styles.slotBadge_b}`}
          aria-label={`Campanha ${slotLabel} selecionada`}
        >
          {slotLabel}
        </span>
      )}
    </button>
  );
};

export default CardCampanha;  
