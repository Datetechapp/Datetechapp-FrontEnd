import { FC, PropsWithChildren, useEffect, useState } from "react";
import "./index.css"

interface ButtonProps {
    text: string,
    count: string | number
}
const FollowerButton: FC<PropsWithChildren<ButtonProps>> = ({text, count}) => {
    const [content, setContent] = useState<String>('')
    useEffect(() => {
        setContent(`${count} ${text}`)
    }, [text, count])
    
    return(
        <button children={content} className="follower_button"/>
    )
}
export default FollowerButton