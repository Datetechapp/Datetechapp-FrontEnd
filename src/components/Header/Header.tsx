import styles from './Header.module.css';
import logo from '../../assets/ModalAuth/mod_welc-logo.svg';
import { LanguageSelect } from './LanguageSelect/LanguageSelect';
import { BtnSignUp } from './BtnSignUp/BtnSignUp';

export const Header = () => {
    
    const navArr: string[] = ['Home', 'About us', 'Safety Tips', 'Support'];

    return (
        <header className={styles.header}>
            <img className={styles.header__logo} src={logo} alt='logo' />
            <nav className={styles.header__nav}>
                <ul className={styles.navList}>
                    {navArr.map(link => <li className={styles.navListItem} key={link}>{link}</li>)}
                </ul>
            </nav>
            <LanguageSelect />
            <BtnSignUp />
        </header>
    );
};
