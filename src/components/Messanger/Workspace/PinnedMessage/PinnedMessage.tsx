import { FC } from "react"


interface PinnedMessageProps {
       text: string;
}

export const PinnedMessage: FC<PinnedMessageProps> = ({ text }) => {
       return (
              <div>
                     <p>{text}</p>
              </div>
       )
}