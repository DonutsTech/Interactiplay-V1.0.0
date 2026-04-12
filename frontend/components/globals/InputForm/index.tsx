'use client';
import { ChangeEvent, FocusEvent, useRef, useState } from 'react';
import styles from './InputForm.module.scss';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface InputFormProps {
  icon: IconDefinition;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  maxLength?: number;
  minLength?: number;
  viewPassword?: boolean;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  className?: string;
};

const InputForm: React.FC<InputFormProps> = ({
  icon,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  maxLength,
  minLength,
  viewPassword,
  inputMode,
  className

}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isPassowordVisible, setIsPasswordVisible] = useState(false);

  const inputType = viewPassword && type === 'password' ? 
  (isPassowordVisible ? 'text' : 'password') : type;


  return (
    <div className={styles.form_inputGroup}>
      <FontAwesomeIcon icon={icon} className={styles.inputIcon} />
      <input 
        ref={inputRef}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        maxLength={maxLength}
        minLength={minLength}
        required
        className={`${styles.form_inputGroup_input} ${className || ''}`}
        inputMode={inputMode}
      />
      {viewPassword && (
        <button 
          type="button" 
          className={styles.viewPasswordButton}
          onClick={() => {
            setIsPasswordVisible(!isPassowordVisible);
          }}
        >
          <FontAwesomeIcon 
            icon={ isPassowordVisible ? faEyeSlash : faEye } 
          />
        </button>
      )}
    </div>
  );
};

export default InputForm;