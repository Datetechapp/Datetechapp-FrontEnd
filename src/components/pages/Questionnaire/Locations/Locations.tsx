import { AutoComplete, Input } from 'antd';
import debounce from 'lodash/debounce';
import { type ReactNode, useCallback, useState } from 'react';

import { fetchData } from '../../../../api';

import { ReactComponent as SearchIcon } from '../../../../assets/CreateAccountForm/searchLocationIcon.svg';
import css from './locations.module.css';

type Location = {
  city: string;
  country: string;
};
type LocationOption = Location & {
  value: string;
  label: ReactNode;
};

export const Locations = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<LocationOption[]>([]);

  const fetchDebounce = useCallback(
    debounce((value: string) => {
      fetchData(value)
        .then(({ data, wikiDataId }) => {
          const cities = data
            .map(({ city, country }: Location) => {
              if (!city.toLowerCase().startsWith(value.toLowerCase())) return;

              const matchCity = city.slice(0, value.length);
              const restCity = city.slice(value.length);

              return {
                value: wikiDataId,
                city,
                country,
                label: (
                  <>
                    <span className={css.match}>{matchCity}</span>
                    <span className={css.mismatch}>{restCity + ', ' + country}</span>
                  </>
                ),
              };
            })
            .filter(Boolean);

          setFilteredOptions(cities);
        })
        .catch(console.error);
    }, 1500),
    [],
  );

  const handleInputChange = (value: string) => {
    setInputValue(value);
    fetchDebounce(value);
  };

  const onSelect = (value: string) => setInputValue(value);

  return (
    <div className={css.searchBlockWrapper}>
      <SearchIcon className={css.searchIcon} />

      <AutoComplete
        className={css.locations}
        options={filteredOptions}
        onSearch={handleInputChange}
        onSelect={onSelect}
        value={inputValue}
        popupClassName={css.popup}
      >
        <Input className={css.search} placeholder="Search" />
      </AutoComplete>
    </div>
  );
};
