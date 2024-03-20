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

const MyInput = ({ field, form, ...props }) => {
  return <Input {...field} {...props} />;
};

export function ModalEditProfile({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [location, setLocation] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState('1');
  const handleChangeOpen = () => {
    setOpen(!open);
  };
  const months = monthsForLocale();

  const handleClose = () => {
    setOpen(false);
  };

  const handlePhotoUpload = (file: string | null) => setPhoto(file);

  return (
    <>
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
            <PhotoUploader onUpload={handlePhotoUpload} photo={photo || ''} />
          </div>
          <Formik
            initialValues={{
              name: '',
              day: '',
              year: '',
              location: '',
              about: '',
            }}
            validationSchema={profileSchema}
            onSubmit={(values: Values) => {
              console.log('submit', values);
              console.log('selected', selectedMonth);
            }}
          >
            {({ errors, touched }) => (
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
                        className={styles.month}
                        component={() =>
                          Dropdown({
                            selected: selectedMonth,
                            options: months,
                            onChange: setSelectedMonth,
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
                      component={() => Locations({ setLocation, location })}
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
                <button type="submit" className={styles.saveBtn}>
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </ModalBox>
    </>
  );
}
