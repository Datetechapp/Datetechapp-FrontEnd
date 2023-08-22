import person from "../../../assets/user/personalInf/aboutMe.svg"
import child from "../../../assets/user/personalInf/child.svg"
import drink from "../../../assets/user/personalInf/drink.svg"
import education from "../../../assets/user/personalInf/education.svg"
import gender from "../../../assets/user/personalInf/gender.svg"
import language from "../../../assets/user/personalInf/language.svg"
import marStatus from "../../../assets/user/personalInf/marStatus.svg"
import pets from "../../../assets/user/personalInf/pets.svg"
import religion from "../../../assets/user/personalInf/religion.svg"
import smoke from "../../../assets/user/personalInf/smoke.svg"
import tall from "../../../assets/user/personalInf/tall.svg"

interface InfoBlock {
    title: string,
    percent: number,
    img: string,
    input?: "text"
}

let infoList: InfoBlock[] = [
    {
        title: 'about me',
        percent: 20,
        img: person,
        input: 'text'
    },
    {
        title: 'education',
        percent: 20,
        img: education,
    },
    {
        title: 'Languages you speak',
        percent: 20,
        img: language,
    },
    {
        title: 'Your Sexual Orientation',
        percent: 20,
        img: gender,
    },
    {
        title: 'Your Religion',
        percent: 20,
        img: religion,
    },
    {
        title: 'Your Tall',
        percent: 20,
        img: tall,
    },
    {
        title: 'What about Smoking?',
        percent: 20,
        img: smoke,
    },
    {
        title: 'How about a Drink?',
        percent: 20,
        img: drink,
    },
    {
        title: 'Your Marital Status',
        percent: 20,
        img: marStatus,
    },
    {
        title: 'What about Children?',
        percent: 20,
        img: child,
    },
    {
        title: 'Your Pets',
        percent: 20,
        img: pets,
    }
]
export default infoList