import css from "./header.module.css"
import { ReactComponent as ArrowLeft } from "../../../assets/Messanger/arrowLeft.svg"
import { ReactComponent as Photo } from "../../../assets/Messanger/PhotoFromMessanger.svg"
import { ReactComponent as CalendarIcon } from "../../../assets/Messanger/CalendarIcon.svg"
import { ReactComponent as VideoCall } from "../../../assets/Messanger/VideoCall.svg"
import { ReactComponent as SearchIcon } from "../../../assets/Messanger/SearchIcon.svg"
import { ReactComponent as Options } from "../../../assets/Messanger/Options.svg"


export const Header = () => {
       return (
              <div className={css.headerWrapper}>
                     <ArrowLeft />
                     <Photo />
                     <div className={css.info}>
                            <p className={css.name}>Michael</p>
                            <p className={css.isOnline}>Online</p>
                     </div>
                     <div className={css.messangerFeatures}>
                            <CalendarIcon />
                            <VideoCall />
                            <SearchIcon />
                            <Options />
                     </div>
              </div>
       )
}