import EmojiPicker from "emoji-picker-react";
import { useCallback, useState } from "react"
import css from "./emoji.module.css"
import { ReactComponent as EmojiArrow } from "../../../../assets/Messanger/EmojiArrow.svg"

export const EmojiComponent = () => {

       const [emojiBlockOpened, setEmojiBlockOpened] = useState(false)

       const handleEmojiClick = useCallback((_, emojiObject) => {
              console.log(emojiObject.emoji);
       }, []);

       const handleEmojOpen = () => {
              setEmojiBlockOpened(!emojiBlockOpened)
       }


       return (
              <div className={css.emojiBlock}>
                     <EmojiPicker onEmojiClick={handleEmojiClick} />
                     <EmojiArrow className={css.arrowIcon} onClick={handleEmojOpen}/>

              </div>
       )
}