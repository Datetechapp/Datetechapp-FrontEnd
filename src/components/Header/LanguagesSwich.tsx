import './LanguagesSwich.css'

type Language = {
    key: number,
    lang: string
}
interface LanguagesSwichType {
    language: Language[],
    nameClass: string,
    ChangeLang: (x: string) => void
}

export const LanguagesSwich = ({ language, nameClass, ChangeLang }: LanguagesSwichType) => {

    const lang = language.map(item => <li onClick={() => ChangeLang(item.lang)} key={item.key}>{item.lang}</li>)
    return (
        <div className={`Languages ${nameClass}`}>
            <div>
                <ul>{lang}</ul>
            </div>
        </div>

    )
}