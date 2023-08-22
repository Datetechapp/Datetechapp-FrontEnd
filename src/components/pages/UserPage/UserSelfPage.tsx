import { FC, useState } from "react";
import avatar from "../../../assets/user/avatar Ivan.svg"
import "./index.css"
import gender from "../../../assets/user/gender.svg"
import sign from "../../../assets/user/zodiac/tau.svg"
import location from "../../../assets/user/location.svg"
import pen from "../../../assets/user/pen.svg"
import FollowerButton from "./FolowersSection/FolowersSection";
import { ProgressBar } from "./ProfileProgressBar";
import { InfoBlock } from "./PersonalInfBlock";
import infoList from "./infoBlocks";

export const UserSelfPage :FC = () => {
    const [progress, setProgress] = useState<number>(73);
    function percentHandler(num:number){
        let sum = progress + num;
        setProgress(sum);
    }
    return(
        <div className="user_page__wrapper">
            <div className="user_page_short_info">
                <img src={avatar} alt="avatar" className="user_main_avatar" />
                <div className="user_page_username">
                    <h2>Ivan, 34</h2>
                    <div className="user_page__edit">
                        <img className="user_pen_edit" src={pen} alt="" />
                    </div>
                </div>
                <div className="user_page_gender">Men <img src={gender} alt="" /></div>
                <div className="user_page_zodiac_sign">Taurus <img src={sign} alt="" /></div>
                <div className="user_page_city">France, Paris <img src={location} alt="" /></div>
            </div>
            <div className="user_page_current_mood"></div>
            <div className="user_followers_section">
                <FollowerButton text="following" count="24"/>
                <FollowerButton text="followers" count="999999"/>
            </div>
            <div className="user__profile_fill_proc">
                <div className="user_progress_bar">
                    <h3 className="user_page_title">Profile</h3>
                    <ProgressBar progress={progress}/>
                </div>
                <p>Your profile is {progress}% full. <br />Fill out your profile to make it easier for other users to find you</p>
            </div>
            <div className="user_page_personal_info">
                <h3 className="user_page_title">personal information</h3>
                {
                    infoList.map((elem)=>{
                        return(
                            <InfoBlock input={elem.input} 
                                title= {elem.title} 
                                percent={elem.percent} 
                                img={elem.img}
                                percentHandler={percentHandler}
                           />
                        )
                    })
                }
            </div>
        </div>
    )
}

