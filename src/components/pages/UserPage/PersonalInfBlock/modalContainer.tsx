import { styled } from "styled-components";

interface Modal {
    display: boolean
}
const ModalContainer = styled.div<Modal>`
    display: ${(props) => {
        if(props.display){
            return 'flex'
        } else return 'none'
    }};
    position: absolute;
    background-color: #00000080;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    
`

export default ModalContainer