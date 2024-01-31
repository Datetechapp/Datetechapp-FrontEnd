import { AutoComplete, ConfigProvider, Input } from 'antd';
import debounce from 'lodash/debounce';
import { type ReactNode, useCallback, useState } from 'react';

import { fetchData } from '../../../../api';

import { ReactComponent as SearchIcon } from '../../../../assets/CreateAccountForm/searchLocationIcon.svg';
import css from './locations.module.css';

type Location = {
  city: string;
  country: string;
  wikiDataId: string;
};
type LocationOption = {
  value: string;
  city: string;
  country: string;
  label: ReactNode;
  key: string;
};

export const Locations = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<LocationOption[]>([]);

  const fetchDebounce = useCallback(
    debounce((value: string) => {
      fetchData(value)
        .then(({ data }) => {
          const cities = data
            .map(({ city, country, wikiDataId }: Location) => {
              if (!city.toLowerCase().startsWith(value.toLowerCase())) return;

              const matchCity = city.slice(0, value.length);
              const restCity = city.slice(value.length);

              return {
                value: `${city}, ${country}`,
                city,
                country,
                label: (
                  <>
                    <span className={css.match}>{matchCity}</span>
                    <span className={css.mismatch}>{restCity + ', ' + country}</span>
                  </>
                ),
                key: wikiDataId,
              };
            })
            .filter(Boolean);

          setFilteredOptions(cities as LocationOption[]);
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
      <ConfigProvider
        theme={{
          components: {
            Select: {
              optionPadding: 0,
            },
          },
        }}
      >
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
      </ConfigProvider>
    </div>
  );
};
