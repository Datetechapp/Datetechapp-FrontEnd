import { FC, PropsWithChildren } from "react"
import './ModalBase.css'
interface PropsModalBase {
    active?: boolean
}
export const ModalBase = ({active, children} :PropsWithChildren<PropsModalBase>)=>{
    return(
        <div className="ModalBase">
          {children}
        </div>
    )
}