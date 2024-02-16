import React, { useState, useEffect, MouseEventHandler } from 'react';
import styles from './MatchingFeed.module.css';
import profilePic from '../../../../assets/feed/profile_img.png';
import MatchedProfile from './MatchedProfile/MatchedProfile';
import IsMatchedModal from './IsMatchedModal/IsMatchedModal';
import left from '../../../../assets/feed/Left.svg';
import right from '../../../../assets/feed/Right.svg';
import up from '../../../../assets/feed/Up.svg';
import down from '../../../../assets/feed/Down.svg';
import { ButtonProps, ArrowButtonProps } from './interfaces';

const profilesDataInterestedInYou = [
  {
    id: 1,
    name: 'Mary',
    age: '22',
    city: 'Paris',
    country: 'France',
    img: profilePic,
    isLikedbyYou: false,
    likeYou: true,
    video: '',
  },
  {
    id: 2,
    name: 'Jane',
    age: '28',
    city: 'London',
    country: 'England',
    img: profilePic,
    isLikedbyYou: false,
    likeYou: true,
    video: '',
  },
  {
    id: 3,
    name: 'Claire',
    age: '24',
    city: 'Paris',
    country: 'France',
    img: profilePic,
    isLikedbyYou: false,
    likeYou: true,
    video: '',
  },
];

const profilesDataNewPeople = [
  {
    id: 1,
    name: 'Anna',
    age: '22',
    city: 'Paris',
    country: 'France',
    img: profilePic,
    isLikedbyYou: false,
    likeYou: false,
    video: '',
  },
  {
    id: 2,
    name: 'Tony',
    age: '28',
    city: 'Madrid',
    country: 'Spain',
    img: profilePic,
    isLikedbyYou: false,
    likeYou: false,
    video: '',
  },
  {
    id: 3,
    name: 'Milly',
    age: '24',
    city: 'Paris',
    country: 'France',
    img: profilePic,
    isLikedbyYou: false,
    likeYou: false,
    video: '',
  },
];

const DeleteButton: React.FC<ButtonProps> = ({ onClick }) => (
  <button className={styles.containerIcons} onClick={onClick}>
    <svg
      className={`${styles.closeIcon} ${styles.matchingButtons}`}
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.30711 20.2929C2.91658 20.6834 2.28342 20.6834 1.89289 20.2929L1.20711 19.6071C0.816582 19.2166 0.816583 18.5834 1.20711 18.1929L8.9 10.5L1.20711 2.80711C0.816583 2.41658 0.816582 1.78342 1.20711 1.39289L1.89289 0.707107C2.28342 0.316582 2.91658 0.316582 3.30711 0.707107L11 8.4L18.6929 0.707107C19.0834 0.316583 19.7166 0.316583 20.1071 0.707107L20.7929 1.39289C21.1834 1.78342 21.1834 2.41658 20.7929 2.80711L13.1 10.5L20.7929 18.1929C21.1834 18.5834 21.1834 19.2166 20.7929 19.6071L20.1071 20.2929C19.7166 20.6834 19.0834 20.6834 18.6929 20.2929L11 12.6L3.30711 20.2929Z" />
    </svg>
  </button>
);

const LikeButton: React.FC<ButtonProps> = ({ onClick }) => (
  <button className={styles.containerIcons} onClick={onClick}>
    <svg
      className={`${styles.heartIcon} ${styles.matchingButtons}`}
      width="36"
      height="33"
      viewBox="0 0 36 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="yourPath"
        d="M34 10C34 5.58172 30.269 2 25.6667 2C22.2256 2 19.2716 4.00227 18 6.85941C16.7284 4.00227 13.7744 2 10.3333 2C5.73096 2 2 5.58172 2 10C2 22.8366 18 31.3333 18 31.3333C18 31.3333 34 22.8366 34 10Z"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6978_64739"
          x1="18"
          y1="2"
          x2="18"
          y2="31.3333"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop1" stopColor="#9747FF" />
          <stop id="stop2" offset="1" stopColor="#DE77C7" />
        </linearGradient>
      </defs>
    </svg>
  </button>
);

const ArrowButton: React.FC<ArrowButtonProps> = ({ src, alt }) => (
  <div className={styles.arrowButtonDirection}>
    <img src={src} alt={alt} />
  </div>
);

const MatchingFeed = () => {
  const [activeButton, setActiveButton] = useState('Interested');
  const [profilesData, setProfilesData] = useState(
    activeButton === 'Interested'
      ? profilesDataInterestedInYou
      : profilesDataNewPeople,
  );

  const [selectedProfileId, setSelectedProfileId] = useState<number | null>(
    null,
  );
  const [showMatchModal, setShowMatchModal] = useState(false);

  const handleDeleteProfile = () => {
    if (selectedProfileId !== null) {
      const updatedProfilesData = profilesData.filter(
        (profile) => profile.id !== selectedProfileId,
      );

      setProfilesData(updatedProfilesData);
    }
  };

  const handleLikeProfile = () => {
    if (selectedProfileId !== null) {
      setProfilesData((prevProfilesData) => {
        const updatedProfilesData = prevProfilesData.map((profile) => {
          if (profile.id === selectedProfileId) {
            return {
              ...profile,
              isLikedbyYou: !profile.isLikedbyYou,
            };
          }

          return profile;
        });

        const selectedProfile = updatedProfilesData.find(
          (profile) => profile.id === selectedProfileId,
        );

        if (selectedProfile?.isLikedbyYou && selectedProfile?.likeYou) {
          setShowMatchModal(true);
        }

        return updatedProfilesData;
      });
    }
  };

  const switchTab = (tab: string) => {
    setActiveButton(tab);

    if (tab === 'Interested') {
      setProfilesData(profilesDataInterestedInYou);
    } else if (tab === 'NewPeople') {
      setProfilesData(profilesDataNewPeople);
    }
  };

  const closeMatchedModal = () => {
    setShowMatchModal(false);
  };

  useEffect(() => {
    if (selectedProfileId !== null) {
      const selectedProfile = profilesData.find(
        (profile) => profile.id === selectedProfileId,
      );

      if (
        selectedProfile &&
        selectedProfile.isLikedbyYou &&
        selectedProfile.likeYou
      ) {
        setShowMatchModal(true);
      }
    }
  }, [selectedProfileId, profilesData]);

  return (
    <div className={styles.matchingContainer}>
      <div>
        <DeleteButton
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation();
            handleDeleteProfile();
          }}
        />
      </div>
      <div className={styles.matchingFeed}>
        <div className={styles.matchingNav}>
          <div
            className={`${styles.navCategory} ${
              activeButton === 'Interested' ? styles.interestedActive : ''
            }`}
            onClick={() => switchTab('Interested')}
          >
            Interested in you
          </div>
          <div
            className={`${styles.navCategory} ${
              activeButton === 'NewPeople' ? styles.newPeopleActive : ''
            }`}
            onClick={() => switchTab('NewPeople')}
          >
            New People
          </div>
        </div>
        <div className={styles.matchingProfiles}>
          {profilesData.map((profile) => (
            <MatchedProfile
              key={profile.id}
              profile={profile}
              setSelectedProfileId={setSelectedProfileId}
              onDelete={() => handleDeleteProfile()}
            />
          ))}
        </div>
      </div>
      <div>
        <LikeButton
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation();
            handleLikeProfile();
          }}
        />
      </div>
      {showMatchModal && (
        <IsMatchedModal
          closeMatchedModal={closeMatchedModal}
          selectedProfileId={selectedProfileId}
          profilesData={profilesData}
        />
      )}
      <div className={styles.arrowButtonsDirections}>
        <ArrowButton src={left} alt="left" />
        <ArrowButton src={up} alt="up" />
        <ArrowButton src={down} alt="down" />
        <ArrowButton src={right} alt="right" />
      </div>
    </div>
  );
};

export default MatchingFeed;