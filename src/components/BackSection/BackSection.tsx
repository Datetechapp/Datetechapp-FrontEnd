import './BackSection.css'
import backImg from '../../assets/Background/Back_Selection.png'
import { Header } from 'components/Header/Header'
import { PropsWithChildren } from 'react'
export const BackSection = ({children}:PropsWithChildren) =>{
    return(
        <div className='BackSection'>
            <Header/>
            {children}
        </div>
    )
}