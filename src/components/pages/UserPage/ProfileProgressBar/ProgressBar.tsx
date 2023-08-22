
import { PropsWithChildren, FC } from "react";
import "./index.css"
import styled from "styled-components";

interface BarProps {
    progress: number
}
export const ProgressBar: FC<PropsWithChildren<BarProps>> = ({progress}) => {
    return(
        <div className="progress_bar">
            <FillBar count={progress}/>
            <BarPercent count={progress}>{progress}%</BarPercent>
        </div>
    )
}

interface StyledProps{
    count?: number
}
const FillBar = styled.div<StyledProps>`
    width: ${(props) => props.count}%;
    height: 10px;
    background-color: var(--violet-active-color);
    border-radius: 54px;
    position: absolute;
    top: 0;
    left: 0;
`
const BarPercent = styled.div<StyledProps>`
    display: flex;
    justify-content: center;
    align-items:center;
    color: var(--dark-background);
    font-weight: 600;
    font-size: 16px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: var(--violet-active-color);
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
    top: 50%;
    left:${(props) => props.count}%;    
`
