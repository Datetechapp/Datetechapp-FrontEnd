import React, { useState, useEffect, useCallback } from 'react';
import { AutoComplete } from 'antd';
import { fetchData } from '../../../../api';
import debounce from 'lodash/debounce';
import { ReactComponent as SearchIcon } from '../../../../assets/CreateAccountForm/searchLocationIcon.svg';
import css from './locations.module.css';

interface OptionsProps {
  value: string;
}

export const Locations = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<OptionsProps[]>([]);

  const fetchDebounce = useCallback(
    debounce((inputValue: string) => {
      fetchData(inputValue)
        .then((result) => {
          if (result && result.data && Array.isArray(result.data)) {
            const cities = result.data.map((item: { city: string, country: string, wikiDataId: string }) => {
              return {
                value: `${item.city}, ${item.country}`,
                city: item.city,
                country: item.country,
                key: item.wikiDataId,
              };
            });

            setFilteredOptions(cities);
            console.log(cities);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, 1500),
    []
  );

  useEffect(() => {
    fetchDebounce(inputValue);
  }, [inputValue]);

  const handleInputChange = (value: string) => {
    setInputValue(value);

    const filtered = filteredOptions.filter(option =>
      option.value.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredOptions(filtered);
  };

  const onSelect = (value: string) => {
    setInputValue(value);
  };

  return (
    <div className={css.searchBlockWrapper}>

      <SearchIcon className={css.searchIcon} />
      <AutoComplete
        className={css.locations}
        options={filteredOptions}
        onSearch={handleInputChange}
        onSelect={onSelect}
        value={inputValue}
        placeholder="Search"
      />
    </div>
  );
};