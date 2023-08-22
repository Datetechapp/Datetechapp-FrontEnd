import { styled } from "styled-components";

interface Modal {
    display: "flex" | "none"
}
const ModalContainer = styled.div<Modal>`
    display: ${(props) => props.display};
    
`