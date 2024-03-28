import { Dispatch, SetStateAction } from 'react';

import MatchedProfile from '../MatchedProfile/MatchedProfile';
import { ProfileData } from '../data';

import styles from '../MatchingFeed.module.css';
type Props = {
  activeButton: string;
  setActiveButton: Dispatch<SetStateAction<string>>;
  setSelectedProfileId: Dispatch<SetStateAction<number | null>>;
  switchTab: (tab: string) => void;
  profilesData: ProfileData;
};

export function MatchVideo({
  activeButton,
  setSelectedProfileId,
  switchTab,
  profilesData,
}: Props) {
  return (
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
          />
        ))}
      </div>
    </div>
  );
}
