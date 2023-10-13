import Select, { Props } from 'react-select';
import React, { useState } from 'react';
import css from "./locations.module.css"

type OptionType = {
       label: string;
       value: string;
};

const options: OptionType[] = [
       { label: 'London, UK', value: 'london' },
       { label: 'New York, USA', value: 'new-york' },
       { label: 'Minsk, Belarus', value: 'minsk' },
];

export const Locations = () => {
       const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

       const handleChange = (selectedOption: OptionType | null) => {
              setSelectedOption(selectedOption);
       };

       const filterOption = (option: OptionType, inputValue: string) => {
              return option.label.toLowerCase().includes(inputValue.toLowerCase());
       };

       return (
              <Select
                     className={css.locations}
                     value={selectedOption}
                     onChange={handleChange}
                     options={options}
                     isSearchable={true}
                     filterOption={filterOption}
              />
       );
};
