import './Header.css'
import logo from "../../assets/ModalAuth/mod_welc-logo.svg"
import { LanguageSelect } from './LanguageSelect/LanguageSelect'
import { BtnSignUp } from './BtnSignUp/BtnSignUp'


export const Header = () => {
    const navArr: string[] = ["Home", "About us", "Safety Tips", "Support"]
    return (
        <header className='Header'>
            <img src={logo} alt='logo' />
            <nav>
                <ul>
                    {navArr.map(link => <li key={link}>{link}</li>)}
                </ul>
            </nav>
            <LanguageSelect />
            <BtnSignUp />
        </header>
    )
}