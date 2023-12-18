import { Button } from "components/common";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import bell from "../../../../assets/Header/bell.svg";
import calendar from "../../../../assets/Header/calendar.svg";
import arrow from "../../../../assets/Header/arrow_button.svg";
import logo from "../../../../assets/ModalAuth/logo.svg";
import avatar from "../../../../assets/user/avatar Ivan.svg";
import "./index.css";

export const MainLayoutHeader: FC = () => {
  return (
    <div className="header__wrapper">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header__info">
        <div className="header_icons">
          <div className="header_bell header_icon">
            <img src={bell} alt="notifications" />
          </div>
          <div className="header_calendar header_icon">
            <img src={calendar} alt="calendar" />
          </div>
        </div>

        <NavLink
          to="self"
          className={({ isActive }) =>
            isActive ? "active_self_link" : "deactive_self_link"
          }
        >
          <div className="user__info">
            <div className="nav_panel_user_pic">
              {" "}
              <img src={avatar} alt="avatar" />{" "}
            </div>
            <div className="user_personal_info">
              <div className="nav_panel_user_name">Ivan</div>
              <div className="nav_panel_user_city">Now in Paris</div>
            </div>
          </div>
          <button className="user_button">
            <img src={arrow} alt="button arrow" />
          </button>
        </NavLink>
      </div>
    </div>
  );
};
