import React from "react";
import css from "./message.module.css"
import { ReactComponent as Photo } from "../../../../assets/Messanger/PhotoFromMessanger.svg";
import { ContextMenu } from "../ContextMenu";

export interface MessageProps {
       id: string;
       text: string;
       isMe: boolean;
       timestamp: string;
       showPhoto: boolean;
       isSelected: boolean;
       onContextMenu: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, messageId: string) => void;
       onContextMenuAction: (text: string) => void;
}

export const Message: React.FC<MessageProps> = ({
       id,
       text,
       isMe,
       timestamp,
       showPhoto,
       isSelected,
       onContextMenu,
       onContextMenuAction,
}) => {
       return (
              <div className={`${isMe ? css.me : css.other} ${isSelected ? css.selectedBlockMessage : ''
                     } `}>
                     {showPhoto && <Photo className={css.photoOther} />}
                     <div>
                            <div
                                   className={`${isMe ? css.messageInfoMe : showPhoto ? css.messageInfoOther : css.messageWithoutPhoto} ${isSelected ? css.selectedMessage : ''
                                          }`}
                                   onContextMenu={(event) => onContextMenu(event, id)}
                            >
                                   <p className={css.messageText}>{text}</p>
                                   <span className={css.messageTimestampt}>{timestamp}</span>
                            </div>
                            <ContextMenu
                                   show={isSelected}
                                   showPhoto={showPhoto}
                                   onContextMenuAction={onContextMenuAction}
                            />
                     </div>
              </div>
       );
};