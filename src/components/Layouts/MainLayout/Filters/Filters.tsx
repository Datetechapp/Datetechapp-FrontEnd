import { useState, useEffect } from "react";
import styles from "./Filters.module.css";
import locationIcon from "../../../../assets/user/location.svg";
import genderIcon from "../../../../assets/user/gender.svg";
import interestsIcon from "../../../../assets/feed/interests.svg";
import lookingForIcon from "../../../../assets/feed/looking-for.svg";
import usersIcon from "../../../../assets/feed/users.svg";
import arrowIcon from "../../../../assets/feed/arrow.svg";
import Modal from "./Modal";

interface SelectedCheckboxesState {
  lookingFor: string[];
  interests: string[];
}

const Filters = () => {
  const [expandedSection, setExpandedSection] = useState("");
  const [locationRange, setLocationRange] = useState(10);
  const [ageRange, setAgeRange] = useState([18, 100]);
  const [selectedCheckboxes, setSelectedCheckboxes] =
    useState<SelectedCheckboxesState>({
      lookingFor: [],
      interests: [],
    });
  const [selectedOption, setSelectedOption] = useState("Women");
  const [selectedLookingForCount, setSelectedLookingForCount] =
    useState<number>(0);
  const [selectedInterestsCount, setSelectedInterestsCount] =
    useState<number>(0);

  const updateCheckboxes = (
    prevOptions: string[],
    value: string,
    setCount: (count: number) => void
  ): string[] => {
    const updatedOptions = prevOptions.includes(value)
      ? prevOptions.filter((option) => option !== value)
      : [...prevOptions, value];

    const count = updatedOptions.length;

    setCount(count);

    return updatedOptions;
  };

  const handleCheckboxChange = (category: string, value: string) => {
    const setCount =
      category === "lookingFor"
        ? setSelectedLookingForCount
        : setSelectedInterestsCount;
    setSelectedCheckboxes((prev) => {
      if (category === "lookingFor" || category === "interests") {
        return {
          ...prev,
          [category]: updateCheckboxes(prev[category], value, setCount),
        };
      } else {
        console.warn(`Unknown category: ${category}`);
        return prev;
      }
    });
  };

  const toggleExpand = (category: string) => {
    setExpandedSection(category);
  };

  const updateAgeRange = (value1: number, value2: number) => {
    setAgeRange([value1, value2]);
    setBackgroundColorAge(value1, value2);
  };

  useEffect(() => {
    setBackgroundColorAge(ageRange[0], ageRange[1]);
  }, []);

  const setBackgroundColorAge = (value1: number, value2: number) => {
    const min = 18;
    const max = 100;

    const normalizedValue1 = ((value1 - min) / (max - min)) * 100;
    const normalizedValue2 = ((value2 - min) / (max - min)) * 100;
    const gradient2 = `linear-gradient(to right, #5F4F7F ${normalizedValue1}%, #C896EF ${normalizedValue1}%, #C896EF  ${normalizedValue2}%, #5F4F7F ${normalizedValue2}%)`;

    const input2 = document.getElementById("age-range-1");

    input2?.style.setProperty("--ageSlidLinGra", gradient2);
  };

  const updateLocationRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const normalizedValue = (Number(event.target.value) / 20) * 100;
    setLocationRange(Number(event.target.value));
    setBackgroundColor(normalizedValue);
  };

  const setBackgroundColor = (normalizedValue: number) => {
    const inputLocation = document.getElementById("location-range");
    inputLocation?.style.setProperty(
      "--sliderLinGra",
      `linear-gradient(to right, #C896EF ${normalizedValue}%, #5F4F7F ${normalizedValue}%)`
    );
  };

  useEffect(() => {
    const normalizedValue = (Number(locationRange) / 20) * 100;
    setBackgroundColor(normalizedValue);
  }, []);

  const sliderStyle = {
    background: `var(--sliderLinGra)`,
  };

  const ageSliderStyle = {
    background: `var(--ageSlidLinGra)`,
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className={styles.filters_header}>
        <span className={styles.filters_title}>Filters</span>
        <button className={styles.filters_clear_button}>Clear</button>
      </div>
      <div className={styles.filters_container}>
        <div
          className={`${styles.filters_section}  ${styles.filters_geolocation}`}
        >
          <div className={styles.containerIcon}>
            <img
              className={styles.icon}
              src={locationIcon}
              alt="location icon"
            />
            <span>Geolocation</span>
          </div>

          <div className={styles.bar}>
            <input
              type="range"
              id="location-range"
              name="location-range"
              min="0"
              max="20"
              className={styles.location_range}
              onChange={updateLocationRange}
              value={locationRange}
              step="5"
              style={sliderStyle}
            />
            <label className={styles.location_label} htmlFor="location-range">
              &gt;{locationRange} km
            </label>
          </div>
        </div>

        <div
          className={`${styles.filters_section}  ${styles.filters_interested_in}`}
        >
          <div className={styles.containerIcon}>
            <img className={styles.icon} src={genderIcon} alt="gender icon" />
            <span>I am interested in</span>
          </div>

          <div className={styles.interests_container}>
            <label
              className={
                selectedOption === "Women" ? styles.active_interests : ""
              }
              htmlFor="women-option"
            >
              <input
                type="radio"
                value="Women"
                id="women-option"
                name="interested-in"
                checked={selectedOption === "Women"}
                onChange={handleOptionChange}
              />
              Women
            </label>

            <label
              className={
                selectedOption === "Men" ? styles.active_interests : ""
              }
              htmlFor="men-option"
            >
              <input
                type="radio"
                value="Men"
                id="men-option"
                name="interested-in"
                checked={selectedOption === "Men"}
                onChange={handleOptionChange}
              />
              Men
            </label>

            <label
              className={
                selectedOption === "Everyone" ? styles.active_interests : ""
              }
              htmlFor="everyone-option"
            >
              <input
                type="radio"
                value="Everyone"
                id="everyone-option"
                name="interested-in"
                checked={selectedOption === "Everyone"}
                onChange={handleOptionChange}
              />
              Everyone
            </label>
          </div>
        </div>

        <div className={`${styles.filters_section}  ${styles.filters_age}`}>
          <div className={styles.containerIcon}>
            <img className={styles.icon} src={usersIcon} alt="users icon" />
            <span>Age</span>
          </div>

          <div className={styles.bar}>
            <input
              type="range"
              id="age-range-0"
              name="age-range"
              min="18"
              max="100"
              className={styles.age_range}
              onChange={(e) =>
                updateAgeRange(Number(e.target.value), ageRange[1])
              }
              value={ageRange[0]}
              step="1"
            />
            <input
              type="range"
              id="age-range-1"
              name="age-range"
              min="18"
              max="100"
              className={`${styles.age_range} ${styles.overlay}`}
              onChange={(e) =>
                updateAgeRange(ageRange[0], Number(e.target.value))
              }
              value={ageRange[1]}
              step="1"
              style={ageSliderStyle}
            />
            <label className={styles.age_label} htmlFor="age-range-0">
              <div>{ageRange[0]} </div> <div>{ageRange[1]}</div>
            </label>
          </div>
        </div>

        <div
          className={`${styles.filters_section}  ${styles.filters_looking_for}`}
        >
          <div className={styles.container_line}>
            <div className={styles.containerIcon}>
              <img
                className={styles.icon}
                src={lookingForIcon}
                alt="looking for icon"
              />
              <span>Looking for</span>
            </div>
            <button
              className={styles.buttonArrowIcon}
              onClick={() => toggleExpand("lookingFor")}
            >
              {selectedLookingForCount > 0 ? (
                <span className={styles.selectedCount}>
                  {selectedLookingForCount}
                </span>
              ) : (
                <img
                  className={styles.arrowIcon}
                  src={arrowIcon}
                  alt="arrow icon"
                />
              )}
            </button>
          </div>
        </div>
        {expandedSection === "lookingFor" && (
          <Modal
            category="lookingFor"
            onClose={() => setExpandedSection("")}
            selectedCheckboxes={selectedCheckboxes.lookingFor}
            onResetSelectedOptions={() =>
              setSelectedCheckboxes((prev) => ({ ...prev, lookingFor: [] }))
            }
            onCheckboxChange={(value) =>
              handleCheckboxChange("lookingFor", value)
            }
          />
        )}

        <div
          className={`${styles.filters_section}  ${styles.filters_interests}`}
        >
          <div className={styles.container_line}>
            <div className={styles.containerIcon}>
              <img
                className={styles.icon}
                src={interestsIcon}
                alt="interests icon"
              />
              <span>Interests</span>
            </div>
            <button
              className={styles.buttonArrowIcon}
              onClick={() => toggleExpand("interests")}
            >
              {selectedInterestsCount > 0 ? (
                <span className={styles.selectedCount}>
                  {selectedInterestsCount}
                </span>
              ) : (
                <img
                  className={styles.arrowIcon}
                  src={arrowIcon}
                  alt="arrow icon"
                />
              )}
            </button>
          </div>
        </div>
        {expandedSection === "interests" && (
          <Modal
            category="interests"
            onClose={() => setExpandedSection("")}
            selectedCheckboxes={selectedCheckboxes.interests}
            onResetSelectedOptions={() =>
              setSelectedCheckboxes((prev) => ({ ...prev, interests: [] }))
            }
            onCheckboxChange={(value) =>
              handleCheckboxChange("interests", value)
            }
          />
        )}
      </div>
    </>
  );
};

export default Filters;
