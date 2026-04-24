'use client';

import styles from './ToggleActive.module.scss';

interface ToggleActiveProps {
  active: boolean;
  onToggle: () => void;
}

const ToggleActive = ({ active, onToggle }: ToggleActiveProps) => {
  return (
    <div className={styles.checkBox_wrapper}>
      <input
        type="checkbox"
        name="thumbActive"
        id="thumbActive"
        checked={active}
        onChange={onToggle}
      />
      <label htmlFor="thumbActive">{active ? 'Ativo' : 'Ativar'}</label>
    </div>
  );
};

export default ToggleActive;
