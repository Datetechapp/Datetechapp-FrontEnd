import { PropsWithChildren, FC, useState, useEffect } from "react";
import "./index.css"
import ModalContainer from "./modalContainer";

interface BlockProps{
    input: 'text' | undefined,
    title: string,
    percent: number,
    img: string,
    percentHandler: Function,
}

export const InfoBlock:FC <PropsWithChildren<BlockProps>> = ({input, title, percent, percentHandler, img}) =>{
    const [textValue, setTextValue] = useState<string>('');
    const [maxChar, setMaxChar] = useState<number>(500);
    const [selectedValue, setSelectedValue] = useState<string>('Click to select');
    const [displayState, setDisplayState] = useState<boolean>(false);
    useEffect(() => {
        if(textValue.length > 0){
            percentHandler(percent)
        }
    }, [textValue])
    let displayHandler = function(){
        setDisplayState(!displayState)
    };
    if(input==='text'){
        return(
            <div className="personal_info_block">
                <div className="info_block_header">
                    <h4 className="info_block_title"><img src={img} alt="" /> {title}</h4> 
                    <div className="info_block_percent">+{percent}%</div>
                </div>
                <div className="info_input_block">
                    <input className="info_block_input_text" 
                        placeholder="What would you like to tell us about yourself?" 
                        type="text"
                        value={textValue} 
                        onChange={e => {setTextValue(e.target.value)}} 
                        maxLength={maxChar}
                    />
                    <div className="input_block_maxChar">{maxChar - textValue.length}</div>
                </div>
                
            </div>
        )
    } else if(title==='education'){
        return (
            <div className="personal_info_block">
                <div className="info_block_header">
                    <h4 className="info_block_title"><img src={img} alt="" /> {title}</h4>
                    <div className="personal_info_selected">{selectedValue}</div>
                </div>
                <div className="personal_info_selected_subtitle">{selectedValue}</div>
                <div className="separator"></div>
            </div>
        )
    } else {
        return (
            <div className="personal_info_block">
                <div className="info_block_header">
                    <h4 className="info_block_title"><img src={img} alt="" /> {title}</h4>
                    <div className="personal_info_selected" onClick={displayHandler}>{selectedValue}</div>
                    <ModalContainer display={displayState} >
                        <div className="close_modal_wrapper" onClick={displayHandler} />
                        <div className="modal"></div>
                    </ModalContainer>
                </div>
                <div className="separator"></div>
            </div>
        )
    }
}
