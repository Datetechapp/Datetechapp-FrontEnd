import style from './InterestProfile.module.css';
import { interests } from './interests';
import { moreInterests } from './interests';

export const InterestProfile = () => {
  return (
    <div className={style.cardBoxAbout}>
      <p className={style.cardBoxAboutTitle}>More about me</p>
      <div className={style.cardBoxInterestsContainer}>
        {interests.map((int, ind) => (
          <div className={style.interestsItem} key={ind}>
            <img className={style.interestsImg} src={int.img} alt={int.title} />
            <p className={style.interestsText}>{int.title}</p>
          </div>
        ))}
      </div>
      <p className={style.cardBoxAboutSubTitle}>Interests</p>
      <div className={style.moreInterests}>
        {moreInterests.map((int, ind) => (
          <div className={style.interestsItemInterests} key={ind}>
            <p className={style.interestsText}>{int}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
