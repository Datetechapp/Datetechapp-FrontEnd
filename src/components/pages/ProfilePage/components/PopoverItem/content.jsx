import copyLinkIcon from './../../../../../assets/Profile/copyLink.svg';
import reportProfileIcon from './../../../../../assets/Profile/reportProfile.svg';
import hideIcon from './../../../../../assets/Profile/hide.svg';
import deleteIcon from './../../../../../assets/Profile/delete.svg';
import showVideo from './../../../../../assets/Profile/showVideo.svg';
import { ContentButton } from './components/ContentButton';

export const contentProfile = (
  <>
    <ContentButton icon={copyLinkIcon} text="Copy link" />
    <ContentButton icon={reportProfileIcon} text="Report profile" />
  </>
);

export const contentMyVideo = (
  <>
    <ContentButton icon={copyLinkIcon} text="Copy link" />
    <ContentButton icon={hideIcon} text="Hide video" />
    <ContentButton icon={deleteIcon} text="Delete video" />
  </>
);

export const contentHiddenVideo = (
  <>
    <ContentButton icon={showVideo} text="Show in account" />
    <ContentButton icon={deleteIcon} text="Delete video" />
  </>
);
