import React from "react";
import css from "./message.module.css"
import { ReactComponent as Photo } from "../../../../assets/Messanger/PhotoFromMessanger.svg";
import { ReactComponent as PinnedIcon } from "../../../../assets/Messanger/PinnedIconForMessage.svg"
import { ContextMenu } from "../ContextMenu";

export interface MessageProps {
       id: string;
       text: string;
       isMe: boolean;
       timestamp: string;
       showPhoto: boolean;
       isSelected: boolean;
       isPinned: boolean;
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
       isPinned,
}) => {
       return (
              <div className={`${isMe ? css.me : css.other} ${isSelected ? css.selectedBlockMessage : ''} `}>
                     {showPhoto && <Photo className={css.photoOther} />}
                     <div>
                            <div
                                   className={`${isMe ? css.messageInfoMe : showPhoto ? css.messageInfoOther : css.messageWithoutPhoto} ${isSelected ? css.selectedMessage : ''
                                          }`}
                                   onContextMenu={(event) => onContextMenu(event, id)}
                            >
                                   <p className={css.messageText}>{text}</p>
                                   <div className={css.messageInfo}>
                                          {isPinned &&
                                                 <div className={css.pinnedIconBlock}>
                                                        <span className={css.pinnedCheck}>Pinned</span>
                                                        <PinnedIcon />
                                                 </div>
                                          }
                                          <span className={css.messageTimestampt}>{timestamp}</span>
                                   </div>


                            </div>
                            <ContextMenu
                                   show={isSelected}
                                   isMe={isMe}
                                   showPhoto={showPhoto}
                                   isPinned={isPinned}
                                   onContextMenuAction={onContextMenuAction}
                            />
                     </div>
              </div>
       );
};