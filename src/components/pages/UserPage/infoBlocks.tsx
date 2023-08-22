import person from "../../../assets/user/personalInf/aboutMe.svg"

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
        img: person,
    },
    {
        title: 'Languages you speak',
        percent: 20,
        img: person,
    },
    {
        title: 'Your Sexual Orientation',
        percent: 20,
        img: person,
    },
    {
        title: 'Your Religion',
        percent: 20,
        img: person,
    },
    {
        title: 'Your Tall',
        percent: 20,
        img: person,
    },
    {
        title: 'What about Smoking?',
        percent: 20,
        img: person,
    },
    {
        title: 'How about a Drink?',
        percent: 20,
        img: person,
    },
    {
        title: 'Your Marital Status',
        percent: 20,
        img: person,
    },
    {
        title: 'What about Children?',
        percent: 20,
        img: person,
    },
    {
        title: 'Your Pets',
        percent: 20,
        img: person,
    }
]
export default infoList