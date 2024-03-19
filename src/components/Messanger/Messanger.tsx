import { useState } from 'react';
import { Footer, Header, Workspace } from '.';

import css from './messanger.module.css';

export const Messanger = () => {
  const [selectedMessageText, setSelectedMessageText] = useState('');
  const [showReplyMessage, setShowReplyMessage] = useState(false);
  const [showSearchMessages, setShowSearchMessages] = useState(false);
  const [blobSrc, setBlobSrc] = useState('');

  const handleShowReplyMessage = () => setShowReplyMessage(false);

  return (
    <div className={css.messangerWrapper}>
      <Header setShowSearchMessages={setShowSearchMessages} />
      <Workspace
        showSearchMessages={showSearchMessages}
        showReplyMessage={showReplyMessage}
        setShowSearchMessages={setShowSearchMessages}
        selectedMessageText={selectedMessageText}
        setSelectedMessageText={setSelectedMessageText}
        setShowReplyMessage={setShowReplyMessage}
        blobSrc={blobSrc}
      />
      <Footer
        selectedMessageText={selectedMessageText}
        showReplyMessage={showReplyMessage}
        onShowReplyMessage={handleShowReplyMessage}
        setBlobSrc={setBlobSrc}
      />
    </div>
  );
};
