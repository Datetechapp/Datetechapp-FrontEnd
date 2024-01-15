import { FC } from 'react';
import { v4 as uuid } from 'uuid';
import { ReactComponent as Answer } from '../../../../assets/Messanger/ContextMenu/Answer.svg';
import { ReactComponent as Copy } from '../../../../assets/Messanger/ContextMenu/Copy.svg';
import { ReactComponent as Fix } from '../../../../assets/Messanger/ContextMenu/Fix.svg';
import { ReactComponent as Complain } from '../../../../assets/Messanger/ContextMenu/Complain.svg';
import { ReactComponent as Delete } from '../../../../assets/Messanger/ContextMenu/Delete.svg';
import { Button } from '../../../common/button';
import css from './contextMenu.module.css';

interface ContextMenuProps {
  show: boolean;
  isMe: boolean;
  isPinned: boolean;
  onContextMenuAction: (text: string) => void;
}

export const ContextMenu: FC<ContextMenuProps> = ({ show, onContextMenuAction, isPinned, isMe }) => {
  
  const contextMenuInfo = [
    {
      text: 'Reply',
      photo: <Answer className={css.iconForContextMenuFeature} />,
    },
    { text: 'Copy', photo: <Copy className={css.iconForContextMenuFeature} /> },
    {
      text: isPinned ? 'Unfix' : 'To fix',
      photo: <Fix className={css.iconForContextMenuFeature} />,
    },
    { text: 'Complain', photo: <Complain className={css.iconForContextMenuFeature} /> },
    { text: 'Delete', photo: <Delete className={css.iconForContextMenuFeature} /> },
  ];

  if (!show) {
    return null;
  }

  return (
    <div className={css.contextMenuWrapper}>
      <div className={`${css.contextMenu} ${isMe ? css.contextMenuForMe : ''}`}>
        {contextMenuInfo.map((button) => (
          <div key={uuid()} className={button.text === 'To fix' || button.text === 'Unfix' ? css.contextMenuBlockToFix : css.contextMenuBlock}>
            {button.photo}
            <Button
              className={button.text === 'Delete' || button.text === 'Complain'
                ? css.contextMenuFeatureRed : css.contextMenuFeature}
              onClick={() => onContextMenuAction(button.text)}
            >
              {button.text}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
