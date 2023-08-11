import { FC } from "react";
import links from "./Links";
import { NavLink } from "react-router-dom";
import "./index.css"
import avatar from "../../../../assets/user/avatar Ivan.svg"

export const MainLayoutNav : FC = () => {
    return(
        <div className="main_layout__nav_panel">
            <div className="user__info">
                <div className="nav_panel_user_pic"> <img src={avatar} alt=""></img> </div>
                <div className="nav_panel_user_name">Ivan</div>
                <div className="nav_panel_user_age">34</div>
                <div className="nav_panel_user_city">Paris</div>
            </div>
            <div className="nav_panel">
                <ul>
                    {
                        links.map((elem) => {
                            return(
                                <li className="links_list"><NavLink to={elem.path} className={({isActive}) => isActive ? "active_link" : "deactive_link"}> <img src={elem.img} alt={elem.key} /> {elem.key}</NavLink></li>
                            )
                        }
                        )
                    }
                </ul>
            </div>
        </div>
    )
}