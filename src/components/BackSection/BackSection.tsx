import './BackSection.css';
import { Header } from 'components/Header/Header';
import { PropsWithChildren } from 'react';
import video from "../../assets/Background/myvideo.mp4";


export const BackSection = ({ children }: PropsWithChildren<{ children: React.ReactNode }>) => {

        return (
            <div className="BackSection">
                <video className="BackSection_video" autoPlay muted loop playsInline preload="auto">
                    <source src={video} type="video/mp4" />
                </video>
                <Header />
                {children}
            </div>
        );
    };


