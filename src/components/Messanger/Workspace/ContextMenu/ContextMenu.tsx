import { FC } from 'react';
import { ReactComponent as Answer } from "../../../../assets/Messanger/ContextMenu/Answer.svg"
import { ReactComponent as Copy } from "../../../../assets/Messanger/ContextMenu/Copy.svg"
import { ReactComponent as Fix } from "../../../../assets/Messanger/ContextMenu/Fix.svg"
import { ReactComponent as Forward } from "../../../../assets/Messanger/ContextMenu/Forward.svg"
import { ReactComponent as Delete } from "../../../../assets/Messanger/ContextMenu/Delete.svg"
import { Button } from "../../../common/button";
import css from "./contextMenu.module.css";
import { v4 as uuid } from "uuid";

interface ContextMenuProps {
       show: boolean;
       showPhoto: any;
       onContextMenuAction: (text: string) => void;
}

export const ContextMenu: FC<ContextMenuProps> = ({ show, showPhoto, onContextMenuAction }) => {
       const contextMenuInfo = [
              { text: "Answer", photo: <Answer className={css.iconForContextMenuFeature} /> },
              { text: "Copy", photo: <Copy className={css.iconForContextMenuFeature} /> },
              { text: "To fix", photo: <Fix className={css.iconForContextMenuFeature} /> },
              { text: "Forward", photo: <Forward className={css.iconForContextMenuFeature} /> },
       ];

       const copyToClipboard = (text: string) => {
              navigator.clipboard.writeText(text);
       };

       if (!show) {
              return null;
       }

       return (
              <div className={css.contextMenuWrapper}>
                     <div className={showPhoto ? css.contextMenu : css.contextMenuWithoutPhoto}>
                            {contextMenuInfo.map((button) => (
                                   
                                   <div key={uuid()} className={css.contextMenuBlock}>
                                          {button.photo}
                                          <Button className={css.contextMenuFeature} onClick={() => onContextMenuAction(button.text)}>
                                                 {button.text}
                                          </Button>
                                   </div>
                            ))}
                            <div className={css.contextMenuBlock}>
                                   <Delete className={css.iconForContextMenuFeature} />
                                   <Button className={css.contextMenuDelete} onClick={() => onContextMenuAction("Delete")}>
                                          Delete
                                   </Button>
                            </div>
                     </div>
              </div>
       );
};
