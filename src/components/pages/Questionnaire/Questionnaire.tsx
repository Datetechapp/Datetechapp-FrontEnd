import React, { useState } from 'react';
import { HeaderSecondary } from 'components/HeaderSecondary';
import moment from 'moment';
import { Input, Button, Checkbox } from 'components/common';
import { QuestionBlock } from './QuestionBlock';
import css from './questionnaire.module.css';
import { ReactComponent as PreviousStep } from '../../../assets/CreateAccountForm/newPreviousStepArrow.svg';
import {
       PhotoUploader,
       VideoUploader,
       GenderDropdawn,
       ModalUploadVideo,
       Locations,
} from '.';

const textForName = 'Tell us more! What do you like to be called?';
const textForButton = 'Continue';

export function Questionnaire() {
       const [step, setStep] = useState(0);
       const [name, setName] = useState('');
       const [day, setDay] = useState('');
       const [isValidDay, setIsValidDay] = useState(false);
       const [month, setMonth] = useState('');
       const [isValidMonth, setIsValidMonth] = useState(false);
       const [year, setYear] = useState('');
       const [isValidYear, setIsValidYear] = useState(false);
       const [isValidBirthday, setIsValidBirthday] = useState(false);
       const [sex, setSex] = useState('');
       const [gender, setGender] = useState('');
       const [genderFilter, setGenderFilter] = useState('');
       const [isThereAPhoto, setIsThereAPhoto] = useState(false);
       const [photo, setPhoto] = useState<string | null>(null);
       const [video, setVideo] = useState<Blob | null>(null);
       const [isThereAVideo, setIsThereAVideo] = useState(false);
       const [isChecked, setIsChecked] = useState(false);
       const [showModalUploadVideo, setShowModalUploadVideo] = useState(false);

       const handlePreviousStep = () => {
              setStep((prevStep) => prevStep - 1);
       };

       const handleNameChange = (
              event: React.ChangeEvent<HTMLInputElement>,
       ): void => {
              setName(event.target.value);
       };

       const handleBirthChange = (
              event: React.ChangeEvent<HTMLInputElement>,
       ): void => {
              const { name, value } = event.target;

              let currentValidDay = isValidDay;
              let currentValidMonth = isValidMonth;
              let currentValidYear = isValidYear;

              if (name === 'day') {
                     currentValidDay = Number(value) >= 1 && Number(value) <= 31;

                     if (value && !currentValidDay) {
                            setDay('');
                            alert('Please enter a number from 1 to 31.');
                     } else {
                            setDay(value);
                     }
                     setIsValidDay(currentValidDay);
              } else if (name === 'month') {
                     currentValidMonth = Number(value) >= 1 && Number(value) <= 12;

                     if (value && !currentValidMonth) {
                            setMonth('');
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

       const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
              if (event.target.value === 'Male' || event.target.value === 'Female') {
                     setSex(event.target.value);
                     setGender('');
              } else {
                     setGender(event.target.value);
                     setSex('');
              }
       };

       const handleGenderFilter = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
              if (event.target.value === 'Male') {
                     setGenderFilter('Male');
              } else {
                     setGenderFilter('Female');
              }
       };

       const handleCheckChange = () => {
              setIsChecked(!isChecked);
       };

       const handlePhotoUpload = (file: string | null) => {
              setPhoto(file);
       };

       const handleVideoUpload = (fileData: Blob | null, isRemoved?: boolean) => {
              if (isRemoved) {
                     setVideo(null);
              } else {
                     setVideo(fileData);
              }
       };

       const handleSubmit = () => {
              // Отправка ответов анкеты
       };

       return (
              <div className={css.questionnaireWrapper}>
                     <HeaderSecondary text="Log out" />
                     <div
                            className={`${css.main} ${step === 0
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
                                                 <h2 className={css.title}>How do you identife?</h2>
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
                                                        onChange={handleGenderFilter}
                                                        showGenders={false}
                                                        sex={genderFilter}
                                                 />
                                                 <div className={css.checkboxBlockWrapper}>
                                                        <p className={css.titleForCheckboxBlock}>Privacy</p>
                                                        <div className={css.checkboxBlock}>
                                                               <p className={css.checkboxDescription}>
                                                                      Open my gender identity
                                                               </p>
                                                               <Checkbox
                                                                      className={css.checkboxForIdentity}
                                                                      checked={isChecked}
                                                                      onChange={handleCheckChange}
                                                               />
                                                        </div>
                                                        <p className={css.checkboxInfo}>
                                                               by clicking you agree that your gender identity will
                                                               be visible to other users in your profile
                                                        </p>
                                                 </div>

                                                 <Button
                                                        className={
                                                               genderFilter ? css.continueBtnValid : css.continueBtn
                                                        }
                                                        onClick={() => setStep(step + 1)}
                                                        disabled={!genderFilter}
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
                                                 <PhotoUploader
                                                        onUpload={handlePhotoUpload}
                                                        onChange={setIsThereAPhoto}
                                                        photo={photo || ''}
                                                 />
                                                 {!isThereAPhoto && (
                                                        <p className={css.warning}>
                                                               We accept JPGs and PNGs of at least 500x500px
                                                        </p>
                                                 )}
                                                 {isThereAPhoto && <p className={css.compliment}>Good choice!</p>}
                                                 <Button
                                                        className={!isThereAPhoto ? css.skipBtn : css.continueBtnValid}
                                                        onClick={() => setStep(step + 1)}
                                                 >
                                                        {!isThereAPhoto ? 'Skip' : 'Continue'}
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
                                                        know you better.{' '}
                                                 </p>
                                                 <VideoUploader
                                                        onUpload={handleVideoUpload}
                                                        onChange={setIsThereAVideo}
                                                        video={video}
                                                 />
                                                 {showModalUploadVideo && (
                                                        <ModalUploadVideo
                                                               isShowModalUploadVideo={showModalUploadVideo}
                                                               setIsShowModalUploadVideo={setShowModalUploadVideo}
                                                               setStep={setStep}
                                                               step={step}
                                                               onUpload={handleVideoUpload}
                                                        />
                                                 )}
                                                 {!isThereAVideo && (
                                                        <div>
                                                               <p className={css.promptForVideo}>
                                                                      Don't you have any ideas?
                                                               </p>
                                                               <p className={css.linkExamplesVideo}>We have examples</p>
                                                        </div>
                                                 )}
                                                 {isThereAVideo ? (
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
                                                 <Locations />
                                          </div>
                                   </div>
                            )}
                     </div>
              </div>
       );
}
