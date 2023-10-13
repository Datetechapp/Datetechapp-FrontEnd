import css from "./headerSecondary.module.css"
import { ReactComponent as Logo } from "../../assets/Header/logoForSecondHeader.svg"
import { LanguageSelect } from "components/Header/LanguageSelect/LanguageSelect"
import { Button } from "components/common"
import { FC } from "react"

interface HeaderSecondaryProps {
       text: string;
}


export const HeaderSecondary: FC<HeaderSecondaryProps> = ({text}) => {
       return (
              <div className={css.header}>
                     <Logo />
                     <div className={css.languageButtonBlock}>
                            <LanguageSelect />
                            <Button className={css.logOutBtn}>{text}</Button>
                     </div>
              </div>
       )
}