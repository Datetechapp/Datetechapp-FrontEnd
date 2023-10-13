import { FC } from "react"
import css from "./pinnedMessage.module.css"
import { ReactComponent as IconPin } from "../../../../assets/Messanger/IconPin.svg"


interface PinnedMessageProps {
       text: string;
       onClick?: () => void;
}

export const PinnedMessage: FC<PinnedMessageProps> = ({ text, onClick }) => {
       return (
              <div className={css.pinnedMessageWrapper} onClick={onClick}>
                     <div>
                            <p className={css.description}>Pinned Message</p>
                            <p className={css.pinnedMessage}>{text}</p>
                     </div>
                     <IconPin />

              </div>
       )
}