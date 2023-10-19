import { useState } from 'react';
import css from './messanger.module.css';
import { Header, Workspace, Footer } from '.';

export function Messanger() {
  const [selectedMessageText, setSelectedMessageText] = useState('');
  const [showReplyMessage, setShowReplyMessage] = useState(false);

  const handleShowReplyMessage = () => {
    setShowReplyMessage(false);
  };

  return (
    <div className={css.messangerWrapper}>
      <Header />
      <Workspace
        selectedMessageText={selectedMessageText}
        setSelectedMessageText={setSelectedMessageText}
        setShowReplyMessage={setShowReplyMessage}
      />
      <Footer
        selectedMessageText={selectedMessageText}
        showReplyMessage={showReplyMessage}
        onShowReplyMessage={handleShowReplyMessage}
      />
    </div>
  );
}
