import './Header.css'
import logo from "../../assets/ModalAuth/mod_welc-logo.svg"
import { LanguageSelect } from './LanguageSelect/LanguageSelect'
import { BtnSignUp } from './BtnSignUp/BtnSignUp'
export const Header = () =>{
    return(
        <header className='Header'>
            <img src={logo} alt='logo'/>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Safety Tips</li>
                    <li>Support</li>
                </ul>  
            </nav>
            <LanguageSelect/>
            <BtnSignUp/>
            {/* <LanguagesSwich language={languages}/> */}
        </header>
    )
}