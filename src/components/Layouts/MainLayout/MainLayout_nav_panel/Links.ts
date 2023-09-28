import calendar from "../../../../assets/NavPanel/calendar.svg"
import favorites from "../../../../assets/NavPanel/Favorites.svg"
import forYou from "../../../../assets/NavPanel/For you.svg"
import personal from "../../../../assets/NavPanel/personal.svg"
import safety from "../../../../assets/NavPanel/safety.svg"
import search from "../../../../assets/NavPanel/Search.svg"
import support from "../../../../assets/NavPanel/support.svg"

interface Link {
    key: string,
    img: string,
    path: string
}
const links :Link []= [
    {
        key: "For you",
        img: forYou,
        path:"forYou"
    },
    {
        key: "search filtres",
        img: search,
        path:"search"
    },
    {
        key:"personal settings",
        img: personal,
        path:"settings"
    },
    {
        key:"calendar",
        img: calendar,
        path:"calendar"
    },
    {
        key:"favorites",
        img: favorites,
        path:"favorites"
    },
    {
        key:"support",
        img: support,
        path:"support"
    },
    {
        key:"safety",
        img: safety,
        path:"safety"
    }
]
export default links