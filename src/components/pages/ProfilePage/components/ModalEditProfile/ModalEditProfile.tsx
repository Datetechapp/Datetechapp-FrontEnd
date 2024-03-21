import { Dispatch, SetStateAction, useState } from 'react';
import { Formik, Form, Field } from 'formik';

import { Input, ModalBox, Dropdown } from 'components/common';
import { Locations, PhotoUploader } from 'components/pages/Questionnaire';

import { monthsForLocale } from '../../../../../utils/date';
import { profileSchema } from './validate.schema';

import SimpleCloseIcon from '../../../../../assets/ForCommonModal/closeButton.svg';
import styles from './ModalEditProfile.module.css';

interface Values {
  name: string;
  day: string;
  year: string;
  location: string;
  about: string;
}

type SetFieldFunction = (field: string, value: string) => void;

const mockValues = {
  name: 'Nike Borzov',
  day: '15',
  month: '7',
  year: '1980',
  location: 'San Francisco, Argentina',
  about: 'I am little horse',
};

const MyInput = ({ field, form, ...props }) => {
  return <Input {...field} {...props} />;
};

const months = monthsForLocale();

export function ModalEditProfile({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [photo, setPhoto] = useState<File | null>(null);
  const [location, setLocation] = useState(mockValues.location);
  const [selectedMonth, setSelectedMonth] = useState(mockValues.month);

  const handleChangeOpen = () => {
    setOpen(!open);
  };

  const handlePhotoUpload = (file: File | null) => setPhoto(file);

  const handleCustomFieldChange = (
    field: string,
    value: string,
    setFieldValue: SetFieldFunction,
    setCustomField: (value: SetStateAction<string>) => void,
  ) => {
    setFieldValue(field, value);
    setCustomField(value);
  };

  const handleSubmit = (values: Values) => {
    const profileInfo = { ...values, photo };

    console.log('val=', profileInfo);
  };

  return (
    <ModalBox
      open={isOpen}
      handleChangeOpen={handleChangeOpen}
      maxWidth="560px"
    >
      <div className={styles.profileInfo}>
        <div className={styles.header}>
          <h1>Edit profile</h1>
          <img
            src={SimpleCloseIcon}
            alt="SimpleCloseIcon"
            style={{
              cursor: 'pointer',
            }}
            onClick={handleChangeOpen}
          />
        </div>
        <div className={styles.photo}>
          <PhotoUploader onUpload={handlePhotoUpload} photo={photo || null} />
        </div>
        <Formik
          initialValues={mockValues}
          validationSchema={profileSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, errors, touched, setFieldValue }) => (
            <Form className={styles.form}>
              <div className={styles.twoCols}>
                <label>
                  Name*
                  <Field
                    name="name"
                    placeholder="Your name"
                    component={MyInput}
                  />
                  {errors.name && touched.name ? (
                    <div className={styles.error}>{errors.name}</div>
                  ) : null}
                </label>

                <label>
                  Date of Birth*
                  <div className={styles.birthDay}>
                    <Field
                      name="day"
                      component={MyInput}
                      className={styles.day}
                    />
                    <Field
                      name="month"
                      className={styles.month}
                      component={() =>
                        Dropdown({
                          selected: selectedMonth,
                          options: months,
                          onChange: (value) =>
                            handleCustomFieldChange(
                              'month',
                              value,
                              setFieldValue,
                              setSelectedMonth,
                            ),
                        })
                      }
                    />
                    <Field name="year" component={MyInput} />
                  </div>
                  {errors.day && touched.day ? (
                    <div className={styles.error}>{errors.day}</div>
                  ) : null}
                  {errors.year && touched.year ? (
                    <div className={styles.error}>{errors.year}</div>
                  ) : null}
                </label>
              </div>
              <div className={styles.location}>
                <label>
                  Location*
                  <Field
                    name="location"
                    placeholder="Your location"
                    component={() =>
                      Locations({
                        setLocation: (value) =>
                          handleCustomFieldChange(
                            'location',
                            value.toString(),
                            setFieldValue,
                            setLocation,
                          ),
                        location,
                      })
                    }
                  />
                </label>
                {errors.location && touched.location ? (
                  <div className={styles.error}>{errors.location}</div>
                ) : null}
              </div>
              <div>
                <label>
                  About me
                  <Field
                    name="about"
                    placeholder="What would you like to tell us about yourself?"
                    component={MyInput}
                  />
                </label>
              </div>
              <button
                type="submit"
                className={styles.saveBtn}
                disabled={!isValid}
              >
                Save
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </ModalBox>
  );
}
