import { PropsWithChildren } from "react"
import './ModalBase.css'
interface PropsModalBase {
    height?: string,
    width?: string,
}

export const ModalBase = ({children, width, height} :PropsWithChildren<PropsModalBase>)=>{
    const styleModalBase = {
        width: width,
        height: height,
        backgroundColor: "#FCFCFC",
        overflow: "hidden",
      }
    return(
        <div className="ModalBase">
        <div style={styleModalBase}>
           {children} 
        </div> 
        </div>
    )
}