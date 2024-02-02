import { useState } from "react";
import styles from "./MatchingFeed.module.css";
import profilePic from "../../../../assets/feed/profile_img.png";

const profilesData = [
  {
    id: 1,
    name: "Mary",
    age: "22",
    city: "Paris",
    country: "France",
    img: profilePic,
  },
  {
    id: 2,
    name: "Jane",
    age: "28",
    city: "Paris",
    country: "France",
    img: profilePic,
  },
  {
    id: 3,
    name: "Claire",
    age: "24",
    city: "Paris",
    country: "France",
    img: profilePic,
  },
];

const MatchingFeed = () => {
  const [isActive, setActive] = useState(false);

  return (
    <div className={styles.matching_container}>
      <div>
        <button className={styles.container_icons}>
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
      </div>
      <div className={styles.matching_feed}>
        <div className={styles.matching_nav}>
          <div className={styles.nav_category}>Interested in you</div>
          <div className={styles.nav_category}>New People</div>
        </div>
        <div className={styles.matching_profiles}>
          {profilesData.map((profile) => (
            <div key={profile.id} className={styles.profile_matched}>
              <div className={styles.profile_container_info}>
                <div className={styles.profile_info}>
                  <img className={styles.profile_picture} src={profile.img} />
                  <div>
                    <div className={styles.profile_city}>
                      {profile.city + ", " + profile.country}
                    </div>
                    <div className={styles.profile_name}>
                      {profile.name + ", " + profile.age}
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
          ))}
        </div>
      </div>
      <div>
        <button className={styles.container_icons}>
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
      </div>
    </div>
  );
};

export default MatchingFeed;
