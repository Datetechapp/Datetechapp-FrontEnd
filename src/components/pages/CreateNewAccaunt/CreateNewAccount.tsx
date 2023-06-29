import css from "./createNewAccount.module.css"
import { Button, Checkbox, Input, Slider } from "components/common"
import { useState } from "react"
import star from "../../../assets/CreateAccountForm/star.svg"
import { GenderDropdawn } from "./GenderDropdawn"
import { InterestedInBlock } from "./InterestedInBlock"
import { VideoUploader } from "./VideoUploader"
import { PhotoUploader } from "./PhotoUploader"
import moment from 'moment';
import 'moment/locale/en-gb';

interface IFormData {
       name: string;
       day: string;
       month: string;
       year: string;
       gender: string;
       interests: string[];
       geolocation: boolean;
       video: File | null;
       photo: File | null;
       checkboxAgreeWithTerms: boolean;

}

const initialFormData: IFormData = {
       name: '',
       day: "",
       month: "",
       year: "",
       gender: "",
       interests: [],
       geolocation: false,
       video: null,
       photo: null,
       checkboxAgreeWithTerms: false,
};


export const CreateNewAccount = () => {
       const [formData, setFormData] = useState<IFormData>(initialFormData);

       const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
              setFormData({ ...formData, name: event.target.value });
       };

       const handleBirthChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
              const { name, value } = event.target;
              let { day, month, year } = formData;

              if (name === 'day') {
                     day = value;
                     setFormData({ ...formData, [name]: value })
              } else if (name === 'month') {
                     month = value;
                     setFormData({ ...formData, [name]: value })
              } else if (name === 'year') {
                     year = value;
                     setFormData({ ...formData, [name]: value })
              }

              const isValidDay = Number(day) >= 1 && Number(day) <= 31;
              const isValidMonth = Number(month) >= 1 && Number(month) <= 12;
              const isValidYear = Number(year) >= 1950 && Number(year) <= moment().year();
              const isValidBirthday = isValidDay && isValidMonth && isValidYear
              

              if (day && !isValidDay) {
                     alert("Please enter a number from 1 to 31.")
                     setFormData({ ...formData, day: "" });
              } else if (month && !isValidMonth) {
                     alert("Please enter a number from 1 to 12.")
                     setFormData({ ...formData, month: "" });
              } else if (year.length === 4 && !isValidYear) {
                     alert("Please enter a number from 1950 to current year.")
                     setFormData({ ...formData, year: "" });
              }



              if (day && month && year.length === 4 && isValidBirthday) {
                     const birthDate = moment(`${day}-${month}-${year}`, 'DDMMYYYY');

                     const age = moment().diff(birthDate, 'years');

                     if (age < 18) {
                            setFormData({
                                   ...formData,
                                   day: "",
                                   month: "",
                                   year: "",
                            });
                            alert('are you crazy?');
                            return;
                     }
                     setFormData({
                            ...formData,
                            day,
                            month,
                            year,
                     });
              }
       };

       const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
              setFormData({ ...formData, gender: event.target.value });
       };

       const handleInterestsChange = (interests: string[]): void => {
              setFormData({ ...formData, interests });
       };

       const handleToggleChange = (enabled: boolean) => {
              setFormData({ ...formData, geolocation: enabled });
       }

       const handleVideoUpload = (file: File | null, isRemoved?: boolean) => {
              if (isRemoved) {
                     setFormData({ ...formData, video: null });
              } else {
                     setFormData({ ...formData, video: file });
              }
       };

       const handlePhotoUpload = (file: File) => {
              setFormData({ ...formData, photo: file })
       };

       const handleCheckboxChange = () => {
              setFormData({ ...formData, checkboxAgreeWithTerms: !formData.checkboxAgreeWithTerms })
       }

       const isFormValid = () => {
              const { name, day, month, year, gender, interests, checkboxAgreeWithTerms } = formData;
              return (name && day && month && year && gender && interests.length && checkboxAgreeWithTerms);
       }


       const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
              event.preventDefault();
              // отправить данные формы на сервер
              console.log(formData);
       };


       return (
              <div className={css.modalCreateNewAccount}>
                     <div className={css.leftHalfCreateNewAccount}>

                            <h2 className={css.createTitle}>Create your Account</h2>
                            <form className={css.formForCreateAccount} onSubmit={handleSubmit} id="myForm">
                                   <div className={css.blockForInfoInput}>
                                          <div className={css.blockWithStar}>
                                                 <p className={css.clue}>Your name</p>
                                                 <img className={css.star} src={star} alt="require" />
                                          </div>
                                          <div className={css.blockLabelAndInput}>
                                                 <label className={css.labelForInput} htmlFor="name">Enter your full name</label>
                                                 <Input
                                                        autoComplete="off"
                                                        className={formData.name ? css.inputNameFilled : css.inputForName}
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleNameChange}
                                                        placeholder="Name"
                                                 />
                                          </div>
                                   </div>
                                   <div className={css.blockForInfoInput}>
                                          <div className={css.blockWithStar}>
                                                 <p className={css.clue}>Your birthday</p>
                                                 <img className={css.star} src={star} alt="require" />
                                          </div>
                                          <div className={css.blockLabelAndInput}>
                                                 <label className={css.labelForInput} htmlFor="birthday">Specify the real date of your birth</label>
                                                 <div className={css.blockForInputBirthday}>
                                                        <Input
                                                               autoComplete="off"
                                                               className={formData.day ? css.inputDayFilled : css.inputForDay}
                                                               type="text"
                                                               id="birthday"
                                                               name="day"
                                                               value={formData.day}
                                                               onChange={handleBirthChange}
                                                               placeholder="Day"
                                                        />
                                                        <Input
                                                               autoComplete="off"
                                                               className={formData.month ? css.inputMonthFilled : css.inputForMonth}
                                                               type="text"
                                                               id="birthday"
                                                               name="month"
                                                               value={formData.month}
                                                               onChange={handleBirthChange}
                                                               placeholder="Month"
                                                        />
                                                        <Input
                                                               autoComplete="off"
                                                               className={formData.year ? css.inputYearFilled : css.inputForYear}
                                                               type="text"
                                                               id="birthday"
                                                               name="year"
                                                               value={formData.year}
                                                               onChange={handleBirthChange}
                                                               placeholder="Year"
                                                        />
                                                 </div>
                                          </div>
                                   </div>
                                   <div className={css.blockForInfoInput}>
                                          <div className={css.blockWithStar}>
                                                 <p className={css.clue}>Your gender</p>
                                                 <img className={css.star} src={star} alt="require" />
                                          </div>

                                          <div className={css.blockLabelAndInput}>
                                                 <p className={css.labelForInput}>Choose who you identify yourself with</p>
                                                 <GenderDropdawn value={formData.gender} onChange={handleGenderChange} />
                                          </div>
                                   </div>
                                   <div className={css.blockForInfoInput}>
                                          <div className={css.blockWithStar}>
                                                 <p className={css.clue}>Interested In</p>
                                                 <img className={css.star} src={star} alt="require" />
                                          </div>

                                          <div className={css.blockLabelAndInput}>
                                                 <p className={css.labelForInput}>Choose the options you are looking for</p>
                                                 <div>
                                                        <InterestedInBlock onChange={handleInterestsChange} checkedItems={formData.interests} />
                                                 </div>
                                          </div>
                                   </div>
                                   <div className={css.blockForInfoInput}>
                                          <div className={css.blockSwitchWithStar}>
                                                 <p className={css.clue}>Geolocation</p>
                                                 <img className={css.star} src={star} alt="require" />
                                          </div>

                                          <div className={css.blockLabelAndInput}>
                                                 <p className={css.labelForInput}>You need to enable geolocation so that the search is as efficient as possible</p>
                                                 <div>
                                                        <Slider onToggle={handleToggleChange} />
                                                 </div>
                                          </div>
                                   </div>
                            </form>

                     </div>
                     <div className={css.rightHalfCreateNewAccount}>
                            <h2 className={css.createTitle}>Video Presentation and Photo</h2>
                            <div className={css.blockForAddFiles}>
                                   <p className={css.labelForInput}>You  can complete this profile later, but without the video, you won't be able to fully use the app</p>
                                   <VideoUploader onUpload={handleVideoUpload} />
                                   <p className={css.promptForVideo}>Don't know which video to shoot?</p>
                                   <a className={css.linkExamplesVideo}>We have examples</a>
                            </div>
                            <div className={css.blockForAddFiles}>
                                   <p className={css.labelForInput}>Add a profile photo so that other users can get a better look at you</p>
                                   <PhotoUploader onUpload={handlePhotoUpload} />
                            </div>
                            <div>
                                   <p className={css.areYouReadyText}>Are you ready to start?</p>
                                   <label className={css.labelForTermsAndConditions}>
                                          <Checkbox
                                                 className={css.checkboxForTermsAndConditions}
                                                 checked={formData.checkboxAgreeWithTerms}
                                                 onChange={handleCheckboxChange}
                                          />
                                          <span className={css.iAgreeText}>I agree with <a href="#" className={css.termsAndConditionsText}>Terms & Conditions</a></span>
                                   </label>
                            </div>

                            <Button
                                   className={isFormValid() ? css.btnCreateAccount : css.btnCreateAccountNotValid}
                                   form="myForm"
                                   disabled={!isFormValid()}
                            >
                                   Continue
                            </Button>
                     </div>
              </div>
       )
}