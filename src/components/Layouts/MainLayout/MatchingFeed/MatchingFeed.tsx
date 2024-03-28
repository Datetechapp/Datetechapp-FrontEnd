import { useState, useEffect, MouseEvent } from 'react';

import IsMatchedModal from './IsMatchedModal/IsMatchedModal';
import left from '../../../../assets/feed/Left.svg';
import right from '../../../../assets/feed/Right.svg';
import up from '../../../../assets/feed/Up.svg';
import down from '../../../../assets/feed/Down.svg';
import {
  ArrowMatchButton,
  DeleteMatchButton,
  LikeMatchButton,
  MatchVideo,
} from './components';
import {
  ProfileData,
  profilesDataInterestedInYou,
  profilesDataNewPeople,
} from './data';

import styles from './MatchingFeed.module.css';

const MatchingFeed = () => {
  const [activeButton, setActiveButton] = useState('Interested');
  const [profilesData, setProfilesData] = useState<ProfileData>(
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
  const switchTab = (tab: string) => {
    setActiveButton(tab);

    if (tab === 'Interested') {
      setProfilesData(profilesDataInterestedInYou);
    } else if (tab === 'NewPeople') {
      setProfilesData(profilesDataNewPeople);
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
      <DeleteMatchButton
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          event.stopPropagation();
          handleDeleteProfile();
        }}
      />
      <MatchVideo
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        setSelectedProfileId={setSelectedProfileId}
        switchTab={switchTab}
        profilesData={profilesData}
      />

      <LikeMatchButton
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          event.stopPropagation();
          handleLikeProfile();
        }}
      />
      {showMatchModal && (
        <IsMatchedModal
          closeMatchedModal={closeMatchedModal}
          selectedProfileId={selectedProfileId}
          profilesData={profilesData}
        />
      )}
      <div className={styles.arrowButtonsDirections}>
        <ArrowMatchButton src={left} alt="left" />
        <ArrowMatchButton src={up} alt="up" />
        <ArrowMatchButton src={down} alt="down" />
        <ArrowMatchButton src={right} alt="right" />
      </div>
    </div>
  );
};

export default MatchingFeed;
