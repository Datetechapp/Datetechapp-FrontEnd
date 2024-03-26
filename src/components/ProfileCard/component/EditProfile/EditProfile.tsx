import editIcon from './../../../../assets/Profile/EditIcon.svg';
import s from './EditProfile.module.css';

export const EditProfile = () => {
  return (
    <div className={s.editIconContainer}>
      <span>Edit</span>
      <img src={editIcon} alt="editIcon" />
    </div>
  );
};
