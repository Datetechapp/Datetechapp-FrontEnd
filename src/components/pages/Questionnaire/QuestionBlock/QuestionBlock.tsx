import React, { FC, useState, ChangeEvent } from 'react';
import { Button, Input } from 'components/common';
import css from './questionBlock.module.css';

interface QuestionBlockProps {
  title: string;
  subtitle?: string;
  setValue: (e: ChangeEvent<HTMLInputElement>) => void;
  textBtn: string;
  value: string;
  step: number;
  nextStep: React.Dispatch<React.SetStateAction<number>>;
}

export const QuestionBlock: FC<QuestionBlockProps> = ({
  title,
  setValue,
  textBtn,
  value,
  step,
  nextStep,
  subtitle,
}) => {
  return (
    <div className={css.formBlock}>
      <h2 className={css.title}>{title}</h2>
      {subtitle && <p className={css.subtitle}>{subtitle}</p>}
      <Input
        className={css.inputForName}
        onChange={setValue}
        type="text"
        value={value}
        placeholder="Your name"
      />
      <Button
        className={!value ? css.continueBtn : css.continueBtnValid}
        disabled={!value}
        onClick={() => nextStep(step + 1)}
      >
        {textBtn}
      </Button>
    </div>
  );
};
