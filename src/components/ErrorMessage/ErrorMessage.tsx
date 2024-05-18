import React from 'react';
import css from './ErrorMessage.module.css';
import { BiError } from "react-icons/bi";

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <div className={css['cont-err']}>
      <BiError size={125} className={css.BiError} />
      <p className={css['err-msg']}>{error}</p>
    </div>
  );
};

export default ErrorMessage;
