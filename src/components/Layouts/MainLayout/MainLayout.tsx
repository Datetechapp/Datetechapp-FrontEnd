import { FC } from "react";
import './index.css'
import { MainLayoutHeader } from "./MainLayout_Header";
import { MainLayoutNav } from "./MainLayout_nav_panel";
import { Outlet } from "react-router-dom";
import { MessagePanel } from "./MainLayout_message_panel/Message_panel";

export const MainLayout : FC = () => {
    return(
        <div className="main_layout">
            <header className="main_layout__header">
                <MainLayoutHeader />
            </header>
            <div className="main_layout__wrapper">
                <MainLayoutNav />
                <div className="main_layout__info_panel">
                    <Outlet />
                </div>
                <div className="main_layout__message_panel">
                    <MessagePanel/>
                </div>
            </div>
        </div>
    )
}