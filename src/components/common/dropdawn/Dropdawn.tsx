import { useState } from 'react';
import css from './dropdawn.module.css';
import { ReactComponent as ArrowRight } from '../../../assets/CreateAccountForm/arrowOpenDropdawn.svg';
import { ReactComponent as CloseIcon } from '../../../assets/CreateAccountForm/closeForDropdawn.svg';

interface DropdownProps {
  value: string;
  name: string;
  genders?: string[];
  descriptionGender?: string[];
  onChange: (value: string) => void;
}

export function Dropdawn({
  value,
  genders,
  onChange,
  descriptionGender,
}: DropdownProps) {
  const [isOpen, setOpen] = useState(false);

  const handleOptionClick = (optionValue: string) => {
    setOpen(false);
    onChange(optionValue);
  };

  const mockArrForGenders = [
    {
      name: 'Agender',
      description:
        'Identifies as having no gender or lacking a gender identity.',
    },
    {
      name: 'Androgynous',
      description:
        'Presents or identifies in a way that combines both masculine and feminine characteristics, or lacks distinct gender expression.',
    },
    {
      name: 'Bigender',
      description:
        'Identifies as having two distinct gender identities, often experiencing them simultaneously or switching between them.',
    },
    {
      name: 'Cisgender man',
      description:
        'People whose gender identity aligns with the sex they were assigned at birth.',
    },
    {
      name: 'Cisgender woman',
      description:
        'People whose gender identity aligns with the sex they were assigned at birth.',
    },
    {
      name: 'Cisgender woman1',
      description:
        'People whose gender identity aligns with the sex they were assigned at birth.',
    },
    { name: 'I use another term' },
  ];

  // const selectedOption = genders.find((gender: string) => gender === value);

  const handleChangeOpen = () => {
    setOpen(false);
  };

  return (
    <div className={css.outerWrapper}>
      <div className={isOpen ? css.dropdawnWrapperOpen : css.dropdawnWrapper}>
        <div
          className={
            !isOpen && value
              ? css.optionSelected
              : !isOpen
              ? css.dropdawnHeader
              : css.dropdawnHeaderOpen
          }
          onClick={() => setOpen(!isOpen)}
        >
          <span className={!isOpen ? css.titleForClosed : css.titleForOpen}>
            {value && value !== 'More options...'
              ? value
              : isOpen
              ? 'Select your gender'
              : 'More options...'}
          </span>
          {!isOpen ? <ArrowRight /> : <CloseIcon onClick={handleChangeOpen} />}
        </div>
        {isOpen && (
          <div>
            <div className={css.dropdawnOptions}>
              {/* {genders.map((gender) => (
                                          <div
                                                 key={gender}
                                                 onClick={() => handleOptionClick(gender)}
                                                 className={css.blockForOption}
                                          >
                                                 <div className={css.dropdawnTitle}>{gender}</div>
                                                 <div className={css.dropdawnDescription}>{descriptionGender[genders.indexOf(gender)]}</div>
                                          </div>
                                   ))} */}
              {mockArrForGenders.map((gender) => (
                <div
                  key={gender.name}
                  onClick={() => handleOptionClick(gender.name)}
                  className={css.blockForOption}
                >
                  <div className={css.dropdawnTitle}>{gender.name}</div>
                  <div className={css.dropdawnDescription}>
                    {gender.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {isOpen && <div className={css.backdrop} onClick={handleChangeOpen} />}
    </div>
  );
}
