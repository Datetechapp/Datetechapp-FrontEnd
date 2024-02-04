import React from 'react';
import styles from './MatchedProfile.module.css';

interface UserProfileCardProps {
  profile: {
    id: number;
    name: string;
    age: string;
    city: string;
    country: string;
    img: string;
    isLiked: boolean;
    likeYou: boolean;
  };
  onDelete: (id: number) => void;
  setSelectedProfileId: React.Dispatch<React.SetStateAction<number | null>>;
}

const MatchedProfile: React.FC<UserProfileCardProps> = ({
  profile,
  onDelete,
  setSelectedProfileId,
}) => {
  return (
    <div
      className={styles.profile_matched}
      onClick={() => {
        setSelectedProfileId(profile.id);
      }}
    >
      <div className={styles.profile_container_info}>
        <div className={styles.profile_info}>
          <img
            className={styles.profile_picture}
            src={profile.img}
            alt={`Profile of ${profile.name}`}
          />
          <div>
            <div className={styles.profile_city}>
              {`${profile.city}, ${profile.country}`}
            </div>
            <div className={styles.profile_name}>
              {`${profile.name}, ${profile.age}`}
            </div>
          </div>
        </div>
        <div className={styles.profile_dots}>...</div>
      </div>

      <div>
        <video className={styles.video_profile} controls>
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default MatchedProfile;
