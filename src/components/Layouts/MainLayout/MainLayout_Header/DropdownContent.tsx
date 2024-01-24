
import playButtonIcon from '../../../../assets/feed/PlayIcon.svg';
import contactIcon from '../../../../assets/feed/Contact.svg';
import questionIcon from '../../../../assets/feed/Question.svg';
import globeIcon from '../../../../assets/feed/Globe.svg';
import logoutIcon from '../../../../assets/feed/Logout.svg';


const DropdownContent = () => {
  return (
        <div
          style={{ display: 'flex' }}
          className="dropdown-content"
          id="dropdown"
        >
          <button className="dropdown-button-premium">Try Premium</button>
          <div className="dropdown-options">
            <a href="#" className="dropdown-item">
              <img src={playButtonIcon} alt="for you" />
              <span>For you</span>
            </a>
            <a href="#" className="dropdown-item">
              <img src={contactIcon} alt="view profile" />
              <span>View Profile</span>
            </a>
            <a href="#" className="dropdown-item">
              <img src={questionIcon} alt="feedback and help" />
              <span>Feedback and help</span>
            </a>
            <a href="#" className="dropdown-item">
              <img src={globeIcon} alt="english" />
              <span>English</span>
            </a>
          </div>

          <a href="#" className="dropdown-item logout_item">
            <img src={logoutIcon} alt="log out" />
            <span>Log out</span>
          </a>
        </div>
  );
};

export default DropdownContent;
