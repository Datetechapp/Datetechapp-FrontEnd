import moment from 'moment';
import { ChangeEvent, useState } from 'react';

import { Button, Checkbox, Input } from 'components/common';
import { HeaderSecondary } from 'components/pages/Questionnaire/HeaderSecondary';
import {
  GenderDropdawn,
  Locations,
  ModalUploadVideo,
  PhotoUploader,
  VideoUploader,
} from '.';
import { QuestionBlock } from './QuestionBlock';

import { ReactComponent as PreviousStep } from '../../../assets/CreateAccountForm/newPreviousStepArrow.svg';
import css from './questionnaire.module.css';

const textForName = 'Tell us more! What do you like to be called?';
const textForButton = 'Continue';

export function Questionnaire() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [isValidDay, setIsValidDay] = useState(false);
  const [isValidMonth, setIsValidMonth] = useState(false);
  const [isValidYear, setIsValidYear] = useState(false);
  const [isValidBirthday, setIsValidBirthday] = useState(false);
  const [sex, setSex] = useState('');
  const [gender, setGender] = useState('');
  const [sexOrientation, setSexOrientation] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [video, setVideo] = useState<Blob | null>(null);
  const [showSexOrientation, setShowSexOrientation] = useState(false);
  const [showModalUploadVideo, setShowModalUploadVideo] = useState(false);
  const [location, setLocation] = useState('');

  const handlePreviousStep = () => setStep((prevStep) => prevStep - 1);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleBirthChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    let currentValidDay = isValidDay;
    let currentValidMonth = isValidMonth;
    let currentValidYear = isValidYear;

    if (name === 'day') {
      currentValidDay = Number(value) >= 1 && Number(value) <= 31;

      if (value && !currentValidDay) {
        alert('Please enter a number from 1 to 31.');
      } else {
        setDay(value);
      }
      setIsValidDay(currentValidDay);
    } else if (name === 'month') {
      currentValidMonth = Number(value) >= 1 && Number(value) <= 12;

      if (value && !currentValidMonth) {
        alert('Please enter a number from 1 to 12.');
      } else {
        setMonth(value);
      }
      setIsValidMonth(currentValidMonth);
    } else if (name === 'year') {
      currentValidYear =
        Number(value) >= 1950 && Number(value) <= moment().year();

      if (value.length === 4 && !currentValidYear) {
        setYear('');
        alert('Please enter a number from 1950 to current year.');
      } else {
        setYear(value);
      }
      setIsValidYear(currentValidYear);

      if (day && month && value.length === 4 && currentValidYear) {
        const birthDate = moment(`${day}-${month}-${value}`, 'DDMMYYYY');
        const age = moment().diff(birthDate, 'years');

        if (age < 18) {
          setDay('');
          setMonth('');
          setYear('');
          alert('are you crazy?');
          setIsValidDay(false);
          setIsValidMonth(false);
          setIsValidYear(false);

          return;
        }
      }
    }

    if (currentValidDay && currentValidMonth && currentValidYear) {
      setIsValidBirthday(true);
    } else {
      setIsValidBirthday(false);
    }
  };

  const handleGenderChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (target.value === 'Male' || target.value === 'Female') {
      setSex(target.value);
      setGender('');
    } else {
      setGender(target.value);
      setSex('');
    }
  };

  const handleOrientationChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setSexOrientation(target.value);

  const handleCheckChange = () => setShowSexOrientation(!showSexOrientation);

  const handlePhotoUpload = (file: File | null) => setPhoto(file);

  const handleVideoUpload = (file: Blob | null) => setVideo(file);

  const handleSubmit = () => {
    const [city, country] = location.split(', ');
    const form = {
      name,
      birthday: `${year}-${month}-${day}`,
      sex: sex || gender,
      show_sex_orientation: showSexOrientation,
      sex_orientation: sexOrientation,
      city,
      country,
      photo,
      video,
    };
    console.log(form); // TODO: update object and remove when back-end is ready
  };

  const handleLocationClick = () => {
    const successPosition = (position: GeolocationPosition) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const url = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

      fetch(`${url}?latitude=${latitude}&longitude=${longitude}`)
        .then((response) => response.json())
        .then((data) => {
          setLocation(`${data?.city}, ${data?.countryName}`); // TODO: implement proper types when API is finalized
          setStep(step + 1);
        });
    };

    function errorPosition(positionError: GeolocationPositionError) {
      console.log('Unable to retrieve your location:', positionError); // TODO: show UI error
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successPosition, errorPosition);
    } else {
      console.log('Geolocation not supported'); // TODO: show UI error
      setStep(step + 1);
    }
  };

  return (
    <div className={css.questionnaireWrapper}>
      <HeaderSecondary text="Log out" />
      <div
        className={`${css.main} ${
          step === 0
            ? css.nameQuestion
            : step === 1
            ? css.birthdayQuestion
            : step === 2
            ? css.genderQuestion
            : step === 3
            ? css.genderFilterQuestion
            : step === 4
            ? css.photoQuestion
            : step === 5
            ? css.videoQuestion
            : step === 6
            ? css.locationQuestion
            : css.lastQuestion
        }`}
      >
        {step === 0 && (
          <QuestionBlock
            title={textForName}
            setValue={handleNameChange}
            textBtn={textForButton}
            value={name}
            nextStep={setStep}
            step={step}
          />
        )}
        {step === 1 && (
          <div className={css.blockWithPreviousArrow}>
            <PreviousStep
              className={css.previousStepArrow}
              onClick={handlePreviousStep}
            />
            <div className={css.form}>
              <h2 className={css.title}>Cool! When is your birthday?</h2>
              <div className={css.inputBlock}>
                <Input
                  autoComplete="off"
                  className={css.inputForDay}
                  type="text"
                  id="birthday"
                  name="day"
                  value={day}
                  onChange={handleBirthChange}
                  placeholder="Day"
                />
                <Input
                  autoComplete="off"
                  className={css.inputForMonth}
                  type="text"
                  id="birthday"
                  name="month"
                  value={month}
                  onChange={handleBirthChange}
                  placeholder="Month"
                />
                <Input
                  autoComplete="off"
                  className={css.inputForYear}
                  type="text"
                  id="birthday"
                  name="year"
                  value={year}
                  onChange={handleBirthChange}
                  placeholder="Year"
                />
              </div>
              <p className={css.warning}>
                You must be at least 18 years old to use DateApp
              </p>
              <Button
                className={
                  isValidBirthday ? css.continueBtnValid : css.continueBtn
                }
                onClick={() => setStep(step + 1)}
                disabled={!isValidBirthday}
              >
                Continue
              </Button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className={css.blockWithPreviousArrow}>
            <PreviousStep
              className={css.previousStepArrow}
              onClick={handlePreviousStep}
            />
            <div className={css.form}>
              <h2 className={css.title}>How do you identify?</h2>
              <GenderDropdawn
                onChange={handleGenderChange}
                showGenders
                gender={gender}
                sex={sex}
              />
              <Button
                className={
                  sex || gender ? css.continueBtnValid : css.continueBtn
                }
                onClick={() => setStep(step + 1)}
                disabled={!sex && !gender}
              >
                Continue
              </Button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className={css.blockWithPreviousArrow}>
            <PreviousStep
              className={css.previousStepArrow}
              onClick={handlePreviousStep}
            />
            <div className={css.form}>
              <h2 className={css.title}>Show me in searches for...</h2>
              <GenderDropdawn
                onChange={handleOrientationChange}
                showGenders={false}
                sex={sexOrientation}
              />
              <div className={css.checkboxBlockWrapper}>
                <p className={css.titleForCheckboxBlock}>Privacy</p>
                <div className={css.checkboxBlock}>
                  <p className={css.checkboxDescription}>
                    Open my gender identity
                  </p>
                  <Checkbox
                    className={css.checkboxForIdentity}
                    checked={showSexOrientation}
                    onChange={handleCheckChange}
                  />
                </div>
                <p className={css.checkboxInfo}>
                  by clicking you agree that your gender identity will be
                  visible to other users in your profile
                </p>
              </div>

              <Button
                className={
                  sexOrientation ? css.continueBtnValid : css.continueBtn
                }
                onClick={() => setStep(step + 1)}
                disabled={!sexOrientation}
              >
                Continue
              </Button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className={css.blockWithPreviousArrow}>
            <PreviousStep
              className={css.previousStepArrow}
              onClick={handlePreviousStep}
            />
            <div className={css.form}>
              <h2 className={css.title}>Share a couple photos of yourself</h2>
              <p className={css.subtitle}>
                Add a profile photo so that other users can get a better look at
                you
              </p>
              <PhotoUploader onUpload={handlePhotoUpload} photo={photo} />
              {!photo && (
                <p className={css.warning}>
                  We accept JPGs and PNGs of at least 500x500px
                </p>
              )}
              {photo && <p className={css.compliment}>Good choice!</p>}
              <Button
                className={!photo ? css.skipBtn : css.continueBtnValid}
                onClick={() => setStep(step + 1)}
              >
                {!photo ? 'Skip' : 'Continue'}
              </Button>
            </div>
          </div>
        )}
        {step === 5 && (
          <div className={css.blockWithPreviousArrow}>
            <PreviousStep
              className={css.previousStepArrow}
              onClick={handlePreviousStep}
            />
            <div className={css.form}>
              <h2 className={css.title}>Add video</h2>
              <p className={css.subtitle}>
                Upload videos no longer than 1 minute that allow users to get to
                know you better.
              </p>
              <VideoUploader onUpload={handleVideoUpload} video={video} />
              {showModalUploadVideo && (
                <ModalUploadVideo
                  isShowModalUploadVideo={showModalUploadVideo}
                  setIsShowModalUploadVideo={setShowModalUploadVideo}
                  setStep={setStep}
                  step={step}
                  onUpload={handleVideoUpload}
                />
              )}
              {!video && (
                <div>
                  <p className={css.promptForVideo}>
                    Don't you have any ideas?
                  </p>
                  <p className={css.linkExamplesVideo}>We have examples</p>
                </div>
              )}
              {video ? (
                <Button
                  className={css.continueBtnValid}
                  onClick={() => setStep(step + 1)}
                >
                  Continue
                </Button>
              ) : (
                <Button
                  className={css.skipBtn}
                  onClick={() => setShowModalUploadVideo(true)}
                >
                  Skip
                </Button>
              )}
            </div>
          </div>
        )}
        {step === 6 && (
          <div className={css.blockWithPreviousArrow}>
            <PreviousStep
              className={css.previousStepArrow}
              onClick={handlePreviousStep}
            />
            <div className={css.form}>
              <h2 className={css.title}>
                We need your locations for best matches
              </h2>
              <Button
                className={css.continueBtnValid}
                onClick={handleLocationClick}
              >
                Allow location access
              </Button>
              <p className={css.textButton} onClick={() => setStep(step + 1)}>
                I will set up it manually
              </p>
            </div>
          </div>
        )}
        {step === 7 && (
          <div className={css.blockWithPreviousArrow}>
            <PreviousStep
              className={css.previousStepArrow}
              onClick={handlePreviousStep}
            />
            <div className={css.form}>
              <h2 className={css.title}>
                We need your locations for best matches
              </h2>
              <Locations setLocation={setLocation} location={location} />
              <Button
                className={location ? css.continueBtnValid : css.continueBtn}
                onClick={handleSubmit}
                disabled={!location}
              >
                Continue
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
